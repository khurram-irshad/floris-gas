'use client';

import { useState } from 'react';
import Image from 'next/image';
import './LocationSection.css';

export default function LocationSection() {
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle location search logic here
    console.log('Searching for location:', location);
  };

  return (
    <section className="location-section">
      <div className="location-container">
        <div className="location-content">
          <h2 className="location-title">
            Find the nearest Florigas location or schedule delivery to your doorstep. We're always nearby when you need us.
          </h2>
          
          <div className="location-finder-card">
            <h3 className="location-finder-title">Find Your Nearest Location</h3>
            
            <form onSubmit={handleSubmit} className="location-form">
              <div className="location-input-container">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your location"
                  className="location-input"
                />
                <button type="button" className="location-icon-button">
                  <Image
                    src="/location-01.svg"
                    alt="Location"
                    width={20}
                    height={20}
                    className="location-icon"
                  />
                </button>
              </div>
              
              <button type="submit" className="location-submit-button">
                FIND LOCATION
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
