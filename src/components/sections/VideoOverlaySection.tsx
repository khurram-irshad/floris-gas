"use client"

import { useState } from "react"
import Image from "next/image"
import "./VideoOverlaySection.css"

export default function VideoOverlaySection() {
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Commented out unused variable

  const handlePlayVideo = () => {
    // setIsVideoPlaying(true); // Commented out since variable is unused
    // You can integrate with YouTube API or iframe here
    window.open("https://www.youtube.com/watch?v=Fp6kDEAEz9I", "_blank")
  }

  return (
    <section className="video-overlay-section">
      {/* Background Image - Trucks */}
      <div className="video-background-container">
        <Image
          src="/trucks-background.jpg"
          alt="FloriGas Trucks Fleet"
          fill
          className="video-background-image"
          priority
        />
        <div className="video-background-overlay"></div>
      </div>

      {/* Video Player Overlay */}
      <div className="video-content-container">
        <div className="video-overlay-card">
          <div className="video-thumbnail">
            <Image
              src="/video-thumbnail.jpg"
              alt="What we do video thumbnail"
              width={600}
              height={340}
              className="thumbnail-image"
            />

            {/* Play Button */}
            <button
              onClick={handlePlayVideo}
              className="play-button"
              aria-label="Play video"
            >
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                className="play-icon"
              >
                <circle
                  cx="30"
                  cy="30"
                  r="30"
                  fill="rgba(255, 255, 255, 0.9)"
                />
                <path
                  d="M25 20L40 30L25 40V20Z"
                  fill="#4168FC"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
