'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/layout/Navigation';
import gasStationsData from '@/data/gas-stations.json';
import './page.css';

interface GasStation {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
  phone: string;
  hours: string;
  services: string[];
  regularPrice: number;
  premiumPrice: number;
  dieselPrice: number;
  propanePrice: number;
}

// Extend Window interface for Google Maps
declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export default function FindLocationPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuickSearch, setSelectedQuickSearch] = useState('');
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const [infoWindow, setInfoWindow] = useState<any>(null);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [isGeocodingLocation, setIsGeocodingLocation] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<any>(null);
  const hasGeocodedLocationRef = useRef<boolean>(false);

  // Load Google Maps API and get user location
  useEffect(() => {
    // Try to get cached location from localStorage first
    const cachedLocation = localStorage.getItem('userLocation');
    if (cachedLocation) {
      try {
        const parsed = JSON.parse(cachedLocation);
        const now = Date.now();
        // Use cached location if it's less than 10 minutes old
        if (parsed.timestamp && (now - parsed.timestamp) < 600000) {
          setUserLocation({ lat: parsed.lat, lng: parsed.lng });
        }
      } catch (e) {
        console.warn('Could not parse cached location, will request fresh location');
      }
    }
    
    // Get fresh user location
    getCurrentLocation();
    
    const loadGoogleMaps = () => {
      // Check if Google Maps is already loaded
      if (window.google?.maps) {
        initializeMap();
        return;
      }

      // Check if script is already in the DOM
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
      if (existingScript) {
        // Script exists, wait for it to load with timeout
        let attempts = 0;
        const maxAttempts = 50; // 5 seconds max wait time
        const checkGoogleMaps = () => {
          if (window.google?.maps) {
            initializeMap();
          } else if (attempts < maxAttempts) {
            attempts++;
            setTimeout(checkGoogleMaps, 100);
          } else {
            console.warn('Timeout waiting for existing Google Maps script to load');
          }
        };
        checkGoogleMaps();
        return;
      }

      // Create new script only if none exists
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places,geometry&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      window.initMap = initializeMap;
      document.head.appendChild(script);
    };

    loadGoogleMaps();
  }, []);

  // Initialize Google Places Autocomplete when Google Maps is loaded
  useEffect(() => {
    if (inputRef.current && window.google?.maps?.places && !autocompleteRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
        types: ['geocode', 'establishment'],
        fields: ['geometry', 'formatted_address', 'name', 'place_id']
      });
      
      autocompleteRef.current = autocomplete;
      
      // Handle place selection
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        
        if (!place.geometry || !place.geometry.location) {
          console.warn('No details available for input: ' + place.name);
          return;
        }
        
        // Update search query with selected place
        const address = place.formatted_address || place.name || '';
        setSearchQuery(address);
        
        // Center map on selected place if map is available
        if (map) {
          const location = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          };
          
          map.setCenter(location);
          map.setZoom(12);
        }
      });
    }
  }, [map]);

  // Geocode user location to address and populate search bar (only once when location is first obtained)
  useEffect(() => {
    if (userLocation && window.google?.maps?.Geocoder && !isGeocodingLocation && !hasGeocodedLocationRef.current && !searchQuery) {
      setIsGeocodingLocation(true);
      hasGeocodedLocationRef.current = true;
      const geocoder = new window.google.maps.Geocoder();
      const latLng = new window.google.maps.LatLng(userLocation.lat, userLocation.lng);
      
      geocoder.geocode({ location: latLng }, (results: any, status: any) => {
        setIsGeocodingLocation(false);
        if (status === 'OK' && results[0]) {
          const address = results[0].formatted_address;
          setSearchQuery(address);
        } else {
          // Fallback to coordinates if geocoding fails
          setSearchQuery(`${userLocation.lat.toFixed(6)}, ${userLocation.lng.toFixed(6)}`);
        }
      });
    }
  }, [userLocation, isGeocodingLocation, searchQuery]);

  // Re-center map when user location becomes available
  useEffect(() => {
    if (userLocation && map && window.google) {
      
      // Clear existing markers first
      markers.forEach(marker => marker.setMap(null));
      setMarkers([]);
      
      // Re-center the map on user location
      map.setCenter(userLocation);
      map.setZoom(10);
      
      // Re-add all markers including user location
      const infoWindowInstance = new window.google.maps.InfoWindow();
      setInfoWindow(infoWindowInstance);
      addGasStationMarkers(map, infoWindowInstance);
      
      // Add user location marker
      const userMarker = new window.google.maps.Marker({
        position: userLocation,
        map: map,
        title: 'Your Location',
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: '#4285F4',
          fillOpacity: 0.8,
          strokeColor: '#FFFFFF',
          strokeWeight: 2
        },
        zIndex: 1500
      });

      const userInfoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 8px; text-align: center;">
            <h4 style="margin: 0; color: #4285F4; font-size: 14px;">📍 Your Location</h4>
          </div>
        `
      });

      userMarker.addListener('click', () => {
        userInfoWindow.open(map, userMarker);
      });
    }
  }, [userLocation, map]);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      // Try to get cached location first for faster response
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          
          // Cache location in localStorage with timestamp
          const locationData = {
            ...userPos,
            timestamp: Date.now()
          };
          localStorage.setItem('userLocation', JSON.stringify(locationData));
          
          setUserLocation(userPos);
        },
        (error) => {
          console.warn('Geolocation not available, using default location');
          // Don't show error to user on this page, just use default location
        },
        {
          enableHighAccuracy: false, // Use cached location for faster response
          timeout: 5000, // Shorter timeout
          maximumAge: 600000 // 10 minutes - allow older cached location
        }
      );
    }
  };

  const initializeMap = () => {
    if (!mapRef.current) return;

    // Use user location if available, otherwise default to center of USA
    const defaultCenter = userLocation || { lat: 37.09024, lng: -95.712891 };
    const defaultZoom = userLocation ? 10 : 5;


    const mapInstance = new window.google.maps.Map(mapRef.current, {
      center: defaultCenter,
      zoom: defaultZoom,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      zoomControl: true,
      panControl: false,
      rotateControl: false,
      scaleControl: false,
      draggable: true,
      scrollwheel: true,
      disableDoubleClickZoom: false,
      gestureHandling: 'greedy',
      keyboardShortcuts: false,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
        }
      ]
    });

    const infoWindowInstance = new window.google.maps.InfoWindow();
    
    setMap(mapInstance);
    setInfoWindow(infoWindowInstance);
    
    // Add gas station markers
    addGasStationMarkers(mapInstance, infoWindowInstance);

    // If we have user location, add a subtle marker to show their location
    if (userLocation) {
      const userMarker = new window.google.maps.Marker({
        position: userLocation,
        map: mapInstance,
        title: 'Your Location',
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: '#4285F4',
          fillOpacity: 0.8,
          strokeColor: '#FFFFFF',
          strokeWeight: 2
        },
        zIndex: 1500
      });

      const userInfoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 8px; text-align: center;">
            <h4 style="margin: 0; color: #4285F4; font-size: 14px;">📍 Your Location</h4>
          </div>
        `
      });

      userMarker.addListener('click', () => {
        userInfoWindow.open(mapInstance, userMarker);
      });
    }
  };

  const addGasStationMarkers = (mapInstance: any, infoWindowInstance: any) => {
    const newMarkers: any[] = [];

    gasStationsData.forEach((station: GasStation) => {
      const marker = new window.google.maps.Marker({
        position: { lat: station.lat, lng: station.lng },
        map: mapInstance,
        title: station.name,
        icon: {
          url: '/florisgas-logo.svg', // Use your logo as marker
          scaledSize: new window.google.maps.Size(40, 40),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(20, 40)
        }
      });

      const infoContent = `
        <div style="padding: 10px; max-width: 300px;">
          <h3 style="margin: 0 0 10px 0; color: #1e293b; font-size: 16px; font-weight: 600;">${station.name}</h3>
          <p style="margin: 0 0 8px 0; color: #64748b; font-size: 14px;">${station.address}</p>
          <p style="margin: 0 0 8px 0; color: #64748b; font-size: 14px;">📞 ${station.phone}</p>
          <p style="margin: 0 0 12px 0; color: #64748b; font-size: 14px;">🕒 ${station.hours}</p>
          
          <div style="margin-bottom: 12px;">
            <h4 style="margin: 0 0 6px 0; color: #1e293b; font-size: 14px; font-weight: 600;">Fuel Prices</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; font-size: 13px;">
              <span>Regular: $${station.regularPrice}</span>
              <span>Premium: $${station.premiumPrice}</span>
              <span>Diesel: $${station.dieselPrice}</span>
              <span style="color: #416AFC; font-weight: 600;">Propane: $${station.propanePrice}</span>
            </div>
          </div>
          
          <div style="margin-bottom: 12px;">
            <h4 style="margin: 0 0 6px 0; color: #1e293b; font-size: 14px; font-weight: 600;">Services</h4>
            <div style="font-size: 13px; color: #64748b;">
              ${station.services.join(' • ')}
            </div>
          </div>
          
          <button 
            onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${station.lat},${station.lng}', '_blank')"
            style="background: linear-gradient(90deg, #416AFC 0%, #5DB2FE 100%); color: white; border: none; padding: 8px 16px; border-radius: 6px; font-size: 14px; cursor: pointer; width: 100%;"
          >
            Get Directions
          </button>
        </div>
      `;

      marker.addListener('click', () => {
        infoWindowInstance.setContent(infoContent);
        infoWindowInstance.open(mapInstance, marker);
      });

      newMarkers.push(marker);
    });

    setMarkers(newMarkers);
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    // Navigate to results page with search query
    router.push(`/find-location/results?q=${encodeURIComponent(searchQuery)}`);
  };

  const findNearestStations = (searchLocation: any) => {
    // Calculate distances and highlight nearest stations
    const stationsWithDistance = gasStationsData.map((station: GasStation) => {
      const stationLocation = new window.google.maps.LatLng(station.lat, station.lng);
      const distance = window.google.maps.geometry.spherical.computeDistanceBetween(
        searchLocation,
        stationLocation
      );
      return { ...station, distance };
    });

    // Sort by distance and show the nearest ones
    stationsWithDistance.sort((a, b) => a.distance - b.distance);
    
  };

  const handleQuickSearch = (location: string) => {
    setSelectedQuickSearch(location);
    setSearchQuery(location);
    
    // Navigate to results page with quick search query
    router.push(`/find-location/results?q=${encodeURIComponent(location)}`);
  };

  const quickSearchOptions = [
    '33132',
    'Miami, FL',
    'Colin Avenue, FL',
    'Lincoln Road, FL'
  ];

  const handleUseCurrentLocation = () => {
    if (userLocation) {
      // Use reverse geocoding to get a readable address
      if (window.google) {
        const geocoder = new window.google.maps.Geocoder();
        const latLng = new window.google.maps.LatLng(userLocation.lat, userLocation.lng);
        
        geocoder.geocode({ location: latLng }, (results: any, status: any) => {
          if (status === 'OK' && results[0]) {
            const address = results[0].formatted_address;
            router.push(`/find-location/results?q=${encodeURIComponent(address)}`);
          } else {
            // Fallback to coordinates
            router.push(`/find-location/results?q=${userLocation.lat},${userLocation.lng}`);
          }
        });
      } else {
        // Fallback to coordinates if Google Maps not loaded yet
        router.push(`/find-location/results?q=${userLocation.lat},${userLocation.lng}`);
      }
    } else {
      alert('Current location not available. Please allow location access or search for a specific location.');
    }
  };

  return (
    <div className="find-location-page">
      <Navigation />
      
      {/* Main Content */}
      <main className="find-location-main">
        {/* Map Background */}
        <div className="find-location-map-background">
          <div ref={mapRef} className="map-iframe" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Search Overlay */}
        <div className="find-location-search-overlay">
          <div className="search-overlay-content">
            <div className="search-input-container">
              <div className="search-input-wrapper">
                <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                  <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, Location or city....."
                  className="search-input"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <button className="search-button" onClick={handleSearch}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/>
                  <path d="m21 21-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Search
              </button>
            </div>

            {/* Quick Search Options */}
            <div className="quick-search-section">
              <span className="quick-search-label">Quick Search:</span>
              <div className="quick-search-options">
                
                {quickSearchOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleQuickSearch(option)}
                    className={`quick-search-option ${
                      selectedQuickSearch === option ? 'active' : ''
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
