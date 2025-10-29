'use client';

import { useState, useEffect, useRef, Suspense, useMemo, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Navigation from '@/components/layout/Navigation';
import gasStationsData from '@/data/gas-stations.json';
import './page.css';

// Constants
const SEARCH_RADIUS_MILES = 20;
const SEARCH_RADIUS_METERS = 32093.44; // 20 miles in meters
const DEFAULT_CENTER = { lat: 39.8283, lng: -98.5795 }; // Geographic center of USA
const ANIMATION_FRAME_RATE = 16; // 60fps
const GEOLOCATION_TIMEOUT = 10000;
const GEOLOCATION_MAX_AGE = 300000; // 5 minutes

// Google Maps script loading state
let isGoogleMapsLoaded = false;
let googleMapsLoadPromise: Promise<void> | null = null;

// Define types for our gas station data
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
  distance?: number;
}

// Extend Window interface for Google Maps
declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

// Optimized Google Maps script loader
const loadGoogleMapsScript = (): Promise<void> => {
  // Check if Google Maps is already loaded
  if (isGoogleMapsLoaded && window.google?.maps) {
    return Promise.resolve();
  }
  
  // Check if there's already a loading promise
  if (googleMapsLoadPromise) {
    return googleMapsLoadPromise;
  }
  
  googleMapsLoadPromise = new Promise((resolve, reject) => {
    // Double-check if Google Maps is available
    if (window.google?.maps) {
      isGoogleMapsLoaded = true;
      resolve();
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
          isGoogleMapsLoaded = true;
          resolve();
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(checkGoogleMaps, 100);
        } else {
          googleMapsLoadPromise = null;
          reject(new Error('Timeout waiting for existing Google Maps script to load'));
        }
      };
      checkGoogleMaps();
      return;
    }

    // Create new script only if none exists
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places,geometry`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      isGoogleMapsLoaded = true;
      resolve();
    };
    
    script.onerror = () => {
      googleMapsLoadPromise = null;
      reject(new Error('Failed to load Google Maps script'));
    };
    
    document.head.appendChild(script);
  });
  
  return googleMapsLoadPromise;
};

function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const [nearestStations, setNearestStations] = useState<GasStation[]>([]);
  const [searchLocation, setSearchLocation] = useState<any>(null);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [locationError, setLocationError] = useState<string>('');
  const [searchMessage, setSearchMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>('');
  const [searchError, setSearchError] = useState<string>('');
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [newSearchQuery, setNewSearchQuery] = useState<string>('');
  const [searchCircle, setSearchCircle] = useState<any>(null);
  const [bottomSheetExpanded, setBottomSheetExpanded] = useState<boolean>(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void)[]>([]);
  const bottomSheetRef = useRef<HTMLDivElement>(null);

  // Memoized distance calculations
  const stationsWithDistance = useMemo(() => {
    if (!searchLocation || !window.google?.maps?.LatLng) return gasStationsData;
    
    return gasStationsData.map((station: GasStation) => {
      const stationLocation = new window.google.maps.LatLng(station.lat, station.lng);
      if (!window.google?.maps?.geometry) return { ...station, distance: 0 };
      
      const distance = window.google.maps.geometry.spherical.computeDistanceBetween(
        searchLocation,
        stationLocation
      );
      const distanceInMiles = Math.round(distance / 1609.34 * 10) / 10;
      return { ...station, distance: distanceInMiles };
    });
  }, [searchLocation]);

  // Cleanup function to prevent memory leaks
  const addCleanupFunction = useCallback((cleanupFn: () => void) => {
    cleanupRef.current.push(cleanupFn);
  }, []);

  const runAllCleanups = useCallback(() => {
    cleanupRef.current.forEach(cleanup => {
      try {
        cleanup();
      } catch (error) {
        console.warn('Cleanup function failed:', error);
      }
    });
    cleanupRef.current = [];
  }, []);

  useEffect(() => {
    const query = searchParams.get('q') || '';
    setSearchQuery(query);
    
    // Set initial loading state
    if (query && query.trim() !== '') {
      setIsLoading(true);
      setLoadingMessage('Initializing search...');
    }
    
    // Get user's current location
    getCurrentLocation();
    
    // Load Google Maps and initialize with the query
    loadGoogleMapsWithQuery(query);
    
    // Cleanup function
    return () => {
      runAllCleanups();
      if (searchCircle) {
        if (searchCircle.animationId) {
          cancelAnimationFrame(searchCircle.animationId);
        }
        if (searchCircle.baseCircle) {
          searchCircle.baseCircle.setMap(null);
        }
        if (searchCircle.radarRings) {
          searchCircle.radarRings.forEach((ring: any) => ring.setMap(null));
        }
      }
    };
  }, [searchParams, runAllCleanups]);

  const loadGoogleMapsWithQuery = useCallback(async (query: string) => {
    try {
      await loadGoogleMapsScript();
      initializeMapWithQuery(query);
    } catch (error) {
      console.error('Failed to load Google Maps:', error);
      setSearchError('Failed to load map. Please refresh the page and try again.');
      setIsLoading(false);
    }
  }, []);

  const getCurrentLocation = useCallback(() => {
    // First try to get cached location from localStorage
    try {
      const cachedLocation = localStorage.getItem('userLocation');
      if (cachedLocation) {
        const locationData = JSON.parse(cachedLocation);
        const cacheAge = Date.now() - locationData.timestamp;
        // Use cached location if it's less than 10 minutes old
        if (cacheAge < 600000) {
          setUserLocation({
            lat: locationData.lat,
            lng: locationData.lng
          });
          return;
        }
      }
    } catch (error) {
      console.warn('Could not read cached location');
    }

    // If no cached location or it's too old, try to get fresh location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          
          // Cache the location
          try {
            const locationData = {
              lat: userPos.lat,
              lng: userPos.lng,
              timestamp: Date.now()
            };
            localStorage.setItem('userLocation', JSON.stringify(locationData));
          } catch (error) {
            console.warn('Could not cache location');
          }
          
          setUserLocation(userPos);
        },
        (error) => {
          // Don't show error to user on results page, just silently fail
          console.warn('Geolocation not available, using search-based location only');
          // Don't set locationError to avoid showing error message to user
        },
        {
          enableHighAccuracy: false, // Use cached location for better compatibility
          timeout: 5000, // Shorter timeout to prevent hanging
          maximumAge: 600000 // 10 minutes - allow older cached location
        }
      );
    } else {
      console.warn('Geolocation is not supported by this browser.');
    }
  }, []);

  const initializeMapWithQuery = useCallback((query: string) => {
    if (!mapRef.current) {
      console.error('mapRef.current is null, cannot initialize map');
      return;
    }
 
    let defaultCenter;
    let defaultZoom;
    
    if (query && query.trim() !== '') {
      // Start with a neutral center - search will reposition the map
      defaultCenter = DEFAULT_CENTER;
      defaultZoom = 4;
    } else if (userLocation) {
      defaultCenter = userLocation;
      defaultZoom = 10;
    } else {
      defaultCenter = { lat: 37.09024, lng: -95.712891 };
      defaultZoom = 4;
    }

    const mapInstance = new window.google.maps.Map(mapRef.current, {
      center: defaultCenter,
      zoom: defaultZoom,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      zoomControl: true,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
        }
      ]
    });

    setMap(mapInstance);
    
    // Always trigger search if we have a search query, regardless of user location
    if (query && query.trim() !== '') {
      // Use setTimeout to ensure map is fully initialized
      setTimeout(() => {
        searchAndShowResults(mapInstance, query);
      }, 100);
    }
    // If we have user location and no search query, show nearby stations
    else if (userLocation && (!query || query.trim() === '')) {
      const userLatLng = new window.google.maps.LatLng(userLocation.lat, userLocation.lng);
      
      // Add user location marker
      const userMarker = new window.google.maps.Marker({
        position: userLocation,
        map: mapInstance,
        title: 'Your Current Location',
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 15,
          fillColor: '#00FF00',
          fillOpacity: 1,
          strokeColor: '#FFFFFF',
          strokeWeight: 3
        },
        zIndex: 2000,
        animation: window.google.maps.Animation.DROP
      });

      // Add cleanup for user marker
      addCleanupFunction(() => {
        userMarker.setMap(null);
      });

      // Add info window for user location
      const userInfoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; text-align: center;">
            <h3 style="margin: 0 0 8px 0; color: #00AA00; font-size: 16px; font-weight: 600;">📍 Your Current Location</h3>
            <p style="margin: 0; color: #64748b; font-size: 14px;">Lat: ${userLocation.lat.toFixed(6)}, Lng: ${userLocation.lng.toFixed(6)}</p>
          </div>
        `
      });

      userMarker.addListener('click', () => {
        userInfoWindow.open(mapInstance, userMarker);
      });

      // Find and show nearby stations
      findAndDisplayNearestStations(userLatLng, mapInstance);
    }
  }, [userLocation, addCleanupFunction]);

  // Consolidated search function (removed duplicate searchAndShowResultsWithQuery)

  const searchAndShowResults = useCallback((mapInstance: any, queryOverride?: string) => {
    const query = queryOverride || searchQuery;
    
    // Validate search query
    if (!query || query.trim() === '') {
      setSearchError('Please enter a location to search for gas stations.');
      setNearestStations([]);
      setHasSearched(true);
      return;
    }
    
    setIsLoading(true);
    setLoadingMessage('Searching for location...');
    setSearchError('');
    setHasSearched(true);
    
    const geocoder = new window.google.maps.Geocoder();
    
    // Use the search query as-is, don't automatically add Florida
    let searchAddress = query.trim();
    

    // Try geocoding without country restriction first, then with US restriction if needed
    geocoder.geocode({ 
      address: searchAddress
    }, (results: any, status: any) => {
      
      if (status === 'OK' && results[0]) {
        const location = results[0].geometry.location;
        setSearchLocation(location);
        
        const lat = location.lat();
        const lng = location.lng();
        
        // Clear existing markers first
        markers.forEach(marker => marker.setMap(null));
        setMarkers([]);
        
        // Center map on the found location with appropriate zoom
        const searchCenter = { lat: lat, lng: lng };
        
        // Use setTimeout to ensure map is ready for centering
        setTimeout(() => {
          mapInstance.setCenter(searchCenter);
          mapInstance.setZoom(12);
        }, 100);
        
        // Add search location marker with a prominent red marker
        const searchMarker = new window.google.maps.Marker({
          position: { lat: lat, lng: lng },
          map: mapInstance,
          title: `Search Location: ${results[0].formatted_address}`,
          icon: {
            path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
            fillColor: '#FF0000',
            fillOpacity: 1,
            strokeColor: '#FFFFFF',
            strokeWeight: 2,
            scale: 2,
            anchor: new window.google.maps.Point(12, 24)
          },
          zIndex: 3000, // Higher z-index to ensure it's always visible
          animation: window.google.maps.Animation.DROP
        });
        
        // Add cleanup for search marker
        addCleanupFunction(() => {
          searchMarker.setMap(null);
        });
        
        // Add info window for search location
        const searchInfoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 10px; text-align: center;">
              <h3 style="margin: 0 0 8px 0; color: #FF0000; font-size: 16px; font-weight: 600;">📍 Your Location</h3>
              <p style="margin: 0; color: #64748b; font-size: 14px;">${results[0].formatted_address}</p>
            </div>
          `
        });
        
        searchMarker.addListener('click', () => {
          searchInfoWindow.open(mapInstance, searchMarker);
        });
        
        
        // Calculate distances and show nearest stations
        findAndDisplayNearestStations(location, mapInstance);
      } else {
        setIsLoading(false);
        
        // Set appropriate error message based on the geocoding status
        let errorMessage = '';
        
        switch (status) {
          case 'ZERO_RESULTS':
            errorMessage = `We couldn't find "${query}". Please check the spelling and try again.`;
            break;
          case 'OVER_QUERY_LIMIT':
            errorMessage = 'Too many search requests. Please try again in a moment.';
            break;
          case 'REQUEST_DENIED':
            errorMessage = 'Search service is temporarily unavailable.';
            break;
          case 'INVALID_REQUEST':
            errorMessage = `"${query}" is not a valid location. Please try a different search.`;
            break;
          default:
            errorMessage = `Unable to find "${query}". Please try a different location.`;
        }
        
        setSearchError(errorMessage);
        setNearestStations([]);
        setSearchMessage('');
        
        // Center map on a default location (USA center) when search fails
        mapInstance.setCenter(DEFAULT_CENTER);
        mapInstance.setZoom(4);
      }
    });
  }, [searchQuery, addCleanupFunction]);

  const createSearchRadiusCircle = useCallback((center: any, mapInstance: any, hasStations: boolean = true) => {
    // Remove existing radar system if any
    if (searchCircle) {
      if (searchCircle.animationId) {
        cancelAnimationFrame(searchCircle.animationId);
      }
      if (searchCircle.baseCircle) {
        searchCircle.baseCircle.setMap(null);
      }
      if (searchCircle.radarRings) {
        searchCircle.radarRings.forEach((ring: any) => ring.setMap(null));
      }
    }

    // Only show radar if there are stations in the radius
    if (!hasStations) {
      setSearchCircle(null);
      return null;
    }

    // Create base circle with smooth transitions
    const baseCircle = new window.google.maps.Circle({
      strokeColor: '#416AFC',
      strokeOpacity: 0.6,
      strokeWeight: 2,
      fillColor: '#416AFC',
      fillOpacity: 0.12,
      map: mapInstance,
      center: center,
      radius: SEARCH_RADIUS_METERS,
    });

    // Create radar rings for smooth radar effect
    const radarRings: any[] = [];
    const numRings = 3; // Reduced for better performance
    
    for (let i = 0; i < numRings; i++) {
      const ring = new window.google.maps.Circle({
        strokeColor: '#416AFC',
        strokeOpacity: 0,
        strokeWeight: 2,
        fillColor: 'transparent',
        fillOpacity: 0,
        map: mapInstance,
        center: center,
        radius: 0,
      });
      radarRings.push(ring);
    }

    // Smooth radar animation using requestAnimationFrame
    let startTime = Date.now();
    let animationId: number;
    
    const smoothRadarAnimation = () => {
      const elapsed = (Date.now() - startTime) / 1000; // Convert to seconds
      
      // Base circle breathing effect with smooth easing
      const breathe = 0.12 + Math.sin(elapsed * 1.2) * 0.08; // Smooth sine wave
      const strokePulse = 0.6 + Math.sin(elapsed * 1.2) * 0.2;
      
      baseCircle.setOptions({
        fillOpacity: Math.max(0.04, breathe),
        strokeOpacity: Math.max(0.3, strokePulse)
      });

      // Radar sweep effect - smooth expanding rings
      radarRings.forEach((ring, index) => {
        const ringDelay = index * 1.5; // Stagger rings by 1.5 seconds
        const ringTime = (elapsed - ringDelay) % 4; // 4-second cycle per ring
        
        if (ringTime > 0 && ringTime < 3) {
          // Smooth expansion from center to edge
          const progress = ringTime / 3;
          const easeOut = 1 - Math.pow(1 - progress, 3); // Cubic ease-out for smooth deceleration
          
          const currentRadius = easeOut * SEARCH_RADIUS_METERS;
          
          // Smooth fade effect - strong at start, fades as it expands
          const fadeProgress = Math.min(1, progress * 1.2);
          const opacity = Math.max(0, (1 - fadeProgress) * 0.7);
          
          // Dynamic stroke weight for visual interest
          const strokeWeight = 1.5 + Math.sin(progress * Math.PI) * 1;
          
          ring.setOptions({
            radius: currentRadius,
            strokeOpacity: opacity,
            strokeWeight: strokeWeight
          });
        } else {
          // Hide ring when not active
          ring.setOptions({
            strokeOpacity: 0,
            radius: 0
          });
        }
      });

      // Continue animation
      animationId = requestAnimationFrame(smoothRadarAnimation);
    };

    // Start smooth animation
    animationId = requestAnimationFrame(smoothRadarAnimation);

    // Store references for cleanup
    const radarSystem = {
      baseCircle: baseCircle,
      radarRings: radarRings,
      animationId: animationId
    };
    
    // Add cleanup function
    addCleanupFunction(() => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      radarRings.forEach((ring: any) => ring.setMap(null));
      baseCircle.setMap(null);
    });
    
    setSearchCircle(radarSystem);
    return radarSystem;
  }, [searchCircle, addCleanupFunction]);

  const findAndDisplayNearestStations = useCallback((searchLoc: any, mapInstance: any) => {
    
    // Update loading message
    setLoadingMessage('Calculating distances to stations...');
    
    // Use memoized stations with distance calculations
    const currentStationsWithDistance = stationsWithDistance.map((station: GasStation) => {
      const stationLocation = new window.google.maps.LatLng(station.lat, station.lng);
      const distance = window.google.maps.geometry.spherical.computeDistanceBetween(
        searchLoc,
        stationLocation
      );
      const distanceInMiles = Math.round(distance / 1609.34 * 10) / 10;
      return { ...station, distance: distanceInMiles };
    });

    // Sort all stations by distance first
    currentStationsWithDistance.sort((a, b) => (a.distance || 0) - (b.distance || 0));
    
    
    // Filter to show stations within search radius
    const nearbyStations = currentStationsWithDistance.filter(station => (station.distance || 0) <= SEARCH_RADIUS_MILES);
    
    
    // Determine what to show based on distance
    let stationsToShow: GasStation[] = [];
    let searchMessage = '';
    
    if (nearbyStations.length > 0) {
      // Show all stations within 20 miles
      stationsToShow = nearbyStations;
    
    }
    
    setNearestStations(stationsToShow);
    setSearchMessage(searchMessage);
    
    // Create animated radar circle only if there are stations
    const hasStations = stationsToShow.length > 0;
    createSearchRadiusCircle(searchLoc, mapInstance, hasStations);
    
    // Update loading message for creating markers
    if (stationsToShow.length > 0) {
      setLoadingMessage('Adding stations to map...');
    }

    // Clear existing markers and circle first
    markers.forEach(marker => marker.setMap(null));
    
    // Clear existing search circle
    if (searchCircle) {
      if (searchCircle.animationId) {
        cancelAnimationFrame(searchCircle.animationId);
      }
      if (searchCircle.baseCircle) {
        searchCircle.baseCircle.setMap(null);
      }
      if (searchCircle.radarRings) {
        searchCircle.radarRings.forEach((ring: any) => ring.setMap(null));
      }
      setSearchCircle(null);
    }
    
    // Add markers for nearby gas stations
    const newMarkers: any[] = [];
    
    stationsToShow.forEach((station: GasStation, index: number) => {
      
      const marker = new window.google.maps.Marker({
        position: { lat: station.lat, lng: station.lng },
        map: mapInstance,
        title: `${station.name} - ${station.distance} miles away`,
        label: {
          text: (index + 1).toString(),
          color: 'white',
          fontWeight: 'bold',
          fontSize: '12px'
        },
        icon: {
          url: '/fuel-pump.png',
          scaledSize: new window.google.maps.Size(40, 40),
          anchor: new window.google.maps.Point(20, 40)
        },
        zIndex: 100
      });

      // Add cleanup for each marker
      addCleanupFunction(() => {
        marker.setMap(null);
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; max-width: 300px;">
            <h3 style="margin: 0 0 10px 0; color: #1e293b; font-size: 16px; font-weight: 600;">${station.name}</h3>
            <p style="margin: 0 0 8px 0; color: #64748b; font-size: 14px;">${station.address}</p>
            <p style="margin: 0 0 8px 0; color: #64748b; font-size: 14px;">📞 ${station.phone}</p>
            <p style="margin: 0 0 8px 0; color: #64748b; font-size: 14px;">📍 ${station.distance} miles away</p>
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
            
            <button 
              onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${station.lat},${station.lng}', '_blank')"
              style="background: linear-gradient(90deg, #416AFC 0%, #5DB2FE 100%); color: white; border: none; padding: 8px 16px; border-radius: 6px; font-size: 14px; cursor: pointer; width: 100%;"
            >
              Get Directions
            </button>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(mapInstance, marker);
      });

      newMarkers.push(marker);
    });

    setMarkers(newMarkers);

    // Determine how to display the map based on stations found
    if (stationsToShow.length > 0) {
      // Create bounds to include both search location and all stations
      const bounds = new window.google.maps.LatLngBounds();
      
      // Add search location to bounds
      bounds.extend(searchLoc);
      
      // Add all station locations to bounds
      stationsToShow.forEach((station: GasStation) => {
        const stationLatLng = new window.google.maps.LatLng(station.lat, station.lng);
        bounds.extend(stationLatLng);
      });
      
      // Use setTimeout to ensure markers are rendered before fitting bounds
      setTimeout(() => {
        // Fit the map to show all markers with some padding
        mapInstance.fitBounds(bounds, {
          padding: {
            top: 80,
            right: 80,
            bottom: 80,
            left: 80
          }
        });
        
      }, 200);
    } else {
      // No stations found - center on search location
      mapInstance.setCenter(searchLoc);
      mapInstance.setZoom(12);
    }
    
    // Search complete - hide loading
    setIsLoading(false);
    setLoadingMessage('');
  }, [createSearchRadiusCircle, markers, searchCircle, stationsWithDistance, addCleanupFunction]);

  const showAllStationsOnMap = (mapInstance: any) => {
    const newMarkers: any[] = [];
    
    gasStationsData.forEach((station: GasStation, index: number) => {
      const marker = new window.google.maps.Marker({
        position: { lat: station.lat, lng: station.lng },
        map: mapInstance,
        title: station.name,
        label: {
          text: (index + 1).toString(),
          color: 'white',
          fontWeight: 'bold',
          fontSize: '14px'
        },
        icon: {
          url: '/fuel-pump.png',
          scaledSize: new window.google.maps.Size(40, 40),
          anchor: new window.google.maps.Point(20, 40)
        },
        zIndex: 100
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
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
            
            <button 
              onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${station.lat},${station.lng}', '_blank')"
              style="background: linear-gradient(90deg, #416AFC 0%, #5DB2FE 100%); color: white; border: none; padding: 8px 16px; border-radius: 6px; font-size: 14px; cursor: pointer; width: 100%;"
            >
              Get Directions
            </button>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(mapInstance, marker);
      });

      newMarkers.push(marker);
    });

    setMarkers(newMarkers);
  };

  const handleStationClick = useCallback((station: GasStation) => {
    if (map && markers[nearestStations.indexOf(station)]) {
      map.setCenter({ lat: station.lat, lng: station.lng });
      map.setZoom(15);
      window.google.maps.event.trigger(markers[nearestStations.indexOf(station)], 'click');
    }
  }, [map, markers, nearestStations]);

  const handleNewSearch = useCallback(() => {
    router.push('/find-location');
  }, [router]);

  const handleSearchSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (newSearchQuery.trim() && map) {
      const trimmedQuery = newSearchQuery.trim();
      setSearchQuery(trimmedQuery);
      
      // Update URL without page reload
      const newUrl = `/find-location/results?q=${encodeURIComponent(trimmedQuery)}`;
      window.history.pushState({}, '', newUrl);
      
      // Clear the new search input
      setNewSearchQuery('');
      
      // Perform the search using the updated query
      searchAndShowResults(map, trimmedQuery);
    }
  }, [newSearchQuery, map, searchAndShowResults]);

  const handleQuickSearch = useCallback((location: string) => {
    setSearchQuery(location);
    setNewSearchQuery('');
    if (map) {
      // Update URL without page reload
      const newUrl = `/find-location/results?q=${encodeURIComponent(location)}`;
      window.history.pushState({}, '', newUrl);
      
      // Perform the search
      searchAndShowResults(map, location);
    }
  }, [map, searchAndShowResults]);

  const handleUseCurrentLocation = useCallback(() => {
    if (userLocation && map) {
      setIsLoading(true);
      setLoadingMessage('Finding nearby stations...');
      
      // Clear existing markers
      markers.forEach(marker => marker.setMap(null));
      setMarkers([]);
      
      // Center map on user location
      map.setCenter(userLocation);
      map.setZoom(12);
      
      // Add user location marker
      const userMarker = new window.google.maps.Marker({
        position: userLocation,
        map: map,
        title: 'Your Current Location',
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 20,
          fillColor: '#00FF00',
          fillOpacity: 1,
          strokeColor: '#FFFFFF',
          strokeWeight: 4
        },
        zIndex: 2000,
        animation: window.google.maps.Animation.DROP
      });

      // Add cleanup for user marker
      addCleanupFunction(() => {
        userMarker.setMap(null);
      });

      // Add info window for user location
      const userInfoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; text-align: center;">
            <h3 style="margin: 0 0 8px 0; color: #00AA00; font-size: 16px; font-weight: 600;">📍 Your Current Location</h3>
            <p style="margin: 0; color: #64748b; font-size: 14px;">Showing nearby FlorisGas stations</p>
          </div>
        `
      });

      userMarker.addListener('click', () => {
        userInfoWindow.open(map, userMarker);
      });

      // Find and show nearby stations
      const userLatLng = new window.google.maps.LatLng(userLocation.lat, userLocation.lng);
      findAndDisplayNearestStations(userLatLng, map);
      
      // Update search query display
      setSearchQuery('Current Location');
    } else if (!userLocation) {
      alert('Current location not available. Please allow location access or try searching for a specific location.');
    }
  }, [userLocation, map, markers, addCleanupFunction, findAndDisplayNearestStations]);

  // Bottom sheet touch handlers
  const handleBottomSheetToggle = useCallback(() => {
    setBottomSheetExpanded(!bottomSheetExpanded);
  }, [bottomSheetExpanded]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    const startY = touch.clientY;
    const startTime = Date.now();
    
    const handleTouchMove = (moveEvent: TouchEvent) => {
      const currentTouch = moveEvent.touches[0];
      const currentY = currentTouch.clientY;
      const deltaY = currentY - startY;
      
      // Only handle upward swipes when collapsed or downward swipes when expanded
      if ((!bottomSheetExpanded && deltaY < -50) || (bottomSheetExpanded && deltaY > 50)) {
        setBottomSheetExpanded(!bottomSheetExpanded);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      }
    };
    
    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
    
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd);
  }, [bottomSheetExpanded]);

  return (
    <div className="results-page">
      {/* Desktop Navigation - Hidden on mobile */}
      <div className="desktop-nav">
        <Navigation />
      </div>
      
      {/* Mobile Header */}
      <div className="mobile-header">
        <button 
          className="mobile-back-btn"
          onClick={handleNewSearch}
          aria-label="Back to search"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="mobile-title">Gas Stations</h1>
        <div className="mobile-header-spacer"></div>
      </div>
      
      <main className="results-main">
        {/* Desktop Sidebar - Hidden on mobile */}
        <div className="results-sidebar desktop-only">
          <div className="search-header">
            <div className="search-info">
              {/* Integrated Search Bar */}
              <form onSubmit={handleSearchSubmit} className="header-search-form">
                <div className="header-search-container">
                  <input
                    type="text"
                    placeholder={searchQuery || "Enter location..."}
                    value={newSearchQuery}
                    onChange={(e) => setNewSearchQuery(e.target.value)}
                    className="header-search-input"
                  />
                  <button type="submit" className="header-search-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                      <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button type="button" onClick={() => {
                    setNewSearchQuery('');
                    setSearchQuery('');
                  }} className="header-clear-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2"/>
                      <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
              </form>
              
              {/* Search Result Message */}
              {searchMessage && (
                <div className="search-result-message">
                  <span className="search-message">{searchMessage}</span>
                </div>
              )}
              
              {/* Search Radius Indicator */}
              {nearestStations.length > 0 && nearestStations.every(station => (station.distance || 0) <= SEARCH_RADIUS_MILES) && (
                <div className="radius-indicator">
                  <span className="radius-badge">📍 Within {SEARCH_RADIUS_MILES}-mile radius</span>
                </div>
              )}
              
              <span className="results-count">{nearestStations.length} Location{nearestStations.length !== 1 ? 's' : ''} Shown</span>
            </div>
          </div>

          <div className="stations-list">
            {isLoading ? (
              <div className="loading-container">
                <div className="loading-spinner">
                  <div className="spinner"></div>
                </div>
                <div className="loading-text">
                  <h3>Searching...</h3>
                  <p>{loadingMessage}</p>
                </div>
              </div>
            ) : searchError ? (
              <div className="error-container">
                <div className="error-icon">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="2"/>
                    <line x1="15" y1="9" x2="9" y2="15" stroke="#ef4444" strokeWidth="2"/>
                    <line x1="9" y1="9" x2="15" y2="15" stroke="#ef4444" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="error-content">
                  <h3>Location Not Found</h3>
                  <p className="error-message">{searchError}</p>
                  
                  <div className="error-suggestions">
                    <h4>Try these suggestions:</h4>
                    <ul>
                      <li>Check your spelling and try again</li>
                      <li>Try searching for a nearby city or landmark</li>
                      <li>Use a more specific address</li>
                      <li>Try "City, State" format (e.g., "Miami, FL")</li>
                    </ul>
                  </div>
                  
                </div>
              </div>
            ) : nearestStations.length === 0 && hasSearched ? (
              <div className="no-stations-found">
                <div className="no-stations-content">
                  <h3>No Gas Stations Found</h3>
                  <p>We couldn't find any FlorisGas stations near this location.</p>
                </div>
              </div>
            ) : nearestStations.length > 0 ? (
              nearestStations.map((station, index) => (
              <div 
                key={station.id} 
                className="station-card"
                onClick={() => handleStationClick(station)}
              >
                <div className="station-image">
                  <img 
                    src="/sell-propane.jpg" 
                    alt={station.name}
                    className="station-img"
                  />
                  <div className="station-status">
                    <span className="status-dot"></span>
                    Open
                  </div>
                </div>
                
                <div className="station-details">
                  <h3 className="station-name">{station.name}</h3>
                  <p className="station-address">{station.address}</p>
                  <p className="station-phone">📞 {station.phone}</p>
                  <p className="station-hours">🕒 {station.hours}</p>
                  
                
                  <div className="station-services">
                    {station.services.slice(0, 2).map((service, idx) => (
                      <span key={idx} className="service-tag">{service}</span>
                    ))}
                    {station.services.length > 2 && (
                      <span className="service-more">+{station.services.length - 2} more</span>
                    )}
                  </div>
                </div>
              </div>
              ))
            ) : null}
          </div>
        </div>

        {/* Full-screen Map */}
        <div className="results-map">
          <div ref={mapRef} className="map-container" />
        </div>

        {/* Mobile Bottom Sheet */}
        <div 
          ref={bottomSheetRef}
          className={`mobile-bottom-sheet ${bottomSheetExpanded ? 'expanded' : ''}`}
          onTouchStart={handleTouchStart}
        >
          <div 
            className="bottom-sheet-handle"
            onClick={handleBottomSheetToggle}
          ></div>
          <div className="bottom-sheet-header">
            <div className="bottom-sheet-title">
              <h2>{nearestStations.length} Location{nearestStations.length !== 1 ? 's' : ''} Found</h2>
              {nearestStations.length > 0 && nearestStations.every(station => (station.distance || 0) <= SEARCH_RADIUS_MILES) && (
                <span className="mobile-radius-badge">Within {SEARCH_RADIUS_MILES}-mile radius</span>
              )}
            </div>
          </div>
          
          <div className="bottom-sheet-content">
            {isLoading ? (
              <div className="mobile-loading">
                <div className="loading-spinner">
                  <div className="spinner"></div>
                </div>
                <div className="loading-text">
                  <h3>Searching...</h3>
                  <p>{loadingMessage}</p>
                </div>
              </div>
            ) : searchError ? (
              <div className="mobile-error">
                <div className="error-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="2"/>
                    <line x1="15" y1="9" x2="9" y2="15" stroke="#ef4444" strokeWidth="2"/>
                    <line x1="9" y1="9" x2="15" y2="15" stroke="#ef4444" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Location Not Found</h3>
                <p>{searchError}</p>
              </div>
            ) : nearestStations.length === 0 && hasSearched ? (
              <div className="mobile-no-results">
                <h3>No Gas Stations Found</h3>
                <p>We couldn't find any FlorisGas stations near this location.</p>
              </div>
            ) : (
              <div className="mobile-stations-list">
                {nearestStations.map((station, index) => (
                  <div 
                    key={station.id} 
                    className="mobile-station-card"
                    onClick={() => handleStationClick(station)}
                  >
                    <div className="mobile-station-image">
                      <img 
                        src="/sell-propane.jpg" 
                        alt={station.name}
                        className="mobile-station-img"
                      />
                      <div className="mobile-station-status">
                        <span className="status-dot"></span>
                        Open
                      </div>
                    </div>
                    
                    <div className="mobile-station-details">
                      <h3 className="mobile-station-name">{station.name}</h3>
                      <p className="mobile-station-address">{station.address}</p>
                      <p className="mobile-station-distance">{station.distance} miles away</p>
                      
                      <div className="mobile-station-services">
                        {station.services.slice(0, 2).map((service, idx) => (
                          <span key={idx} className="mobile-service-tag">{service}</span>
                        ))}
                        {station.services.length > 2 && (
                          <span className="mobile-service-more">+{station.services.length - 2} more</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="mobile-station-actions">
                      <button className="mobile-directions-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsContent />
    </Suspense>
  );
}
