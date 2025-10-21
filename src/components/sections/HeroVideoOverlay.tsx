'use client';

import { useState } from 'react';
import Image from 'next/image';
import './HeroVideoOverlay.css';

export default function HeroVideoOverlay() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="hero-video-overlay">
      <div className="hero-video-container">
        {!isVideoPlaying ? (
          <div className="hero-video-thumbnail" onClick={handlePlayVideo}>
            <Image
              src="/video-thumbnail.jpg"
              alt="What we do video thumbnail"
              width={450}
              height={540}
              className="hero-thumbnail-image"
            />
            
            {/* Play Button */}
            <button 
              className="hero-video-play-button"
              aria-label="Play video"
            >
              <svg 
                width="60" 
                height="60" 
                viewBox="0 0 60 60" 
                fill="none"
                className="hero-play-icon"
              >
                <defs>
                  <radialGradient id="playButtonGradient" cx="8.75%" cy="-37.14%" r="193.05%">
                    <stop offset="4.03%" stopColor="#4E75AA" />
                    <stop offset="91.3%" stopColor="#0E081B" />
                  </radialGradient>
                </defs>
                <circle cx="30" cy="30" r="30" fill="url(#playButtonGradient)" />
                <path 
                  d="M25 20L40 30L25 40V20Z" 
                  fill="white"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="hero-video-iframe-container">
            <iframe
              width="450"
              height="270"
              src="https://www.youtube.com/embed/Fp6kDEAEz9I?autoplay=1"
              title="What we do - FloriGAS"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="hero-video-iframe"
            />
          </div>
        )}
      </div>
    </div>
  );
}
