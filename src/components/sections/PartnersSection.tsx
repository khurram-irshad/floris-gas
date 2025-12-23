"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import "./PartnersSection.css"

const partnersData = [
  {
    id: 1,
    name: "Google",
    logo: "/Google.svg",
    alt: "Google Logo",
  },
  {
    id: 2,
    name: "Apple",
    logo: "/Apple.svg",
    alt: "Apple Logo",
  },
  {
    id: 3,
    name: "Slack",
    logo: "/Slack.svg",
    alt: "Slack Logo",
  },
  {
    id: 4,
    name: "Amazon",
    logo: "/amazon.svg",
    alt: "Amazon Logo",
  },
  {
    id: 5,
    name: "Microsoft",
    logo: "/microsoft.svg",
    alt: "Microsoft Logo",
  },
  {
    id: 6,
    name: "Airbnb",
    logo: "/Airbnb.svg",
    alt: "Airbnb Logo",
  },
]

export default function PartnersSection() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    // Check if we're on mobile
    const isMobile = window.innerWidth <= 768
    if (!isMobile) return

    let scrollPosition = 0
    const scrollStep = 1
    const scrollDelay = 30

    const autoScroll = () => {
      if (!grid) return

      scrollPosition += scrollStep

      // Reset to beginning when we reach the end
      if (scrollPosition >= grid.scrollWidth - grid.clientWidth) {
        scrollPosition = 0
      }

      grid.scrollTo({
        left: scrollPosition,
        behavior: "auto",
      })
    }

    const intervalId = setInterval(autoScroll, scrollDelay)

    // Pause auto-scroll when user interacts
    const handleTouchStart = () => clearInterval(intervalId)
    const handleTouchEnd = () => {
      // Resume auto-scroll after 3 seconds of no interaction
      setTimeout(() => {
        if (grid) {
          const newIntervalId = setInterval(autoScroll, scrollDelay)
          return () => clearInterval(newIntervalId)
        }
      }, 3000)
    }

    grid.addEventListener("touchstart", handleTouchStart)
    grid.addEventListener("touchend", handleTouchEnd)

    // Cleanup
    return () => {
      clearInterval(intervalId)
      if (grid) {
        grid.removeEventListener("touchstart", handleTouchStart)
        grid.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [])

  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2 className="partners-title">
          Trusted by Top Providers and Partners
        </h2>
        <div
          className="partners-grid"
          ref={gridRef}
        >
          {partnersData.map((partner) => (
            <div
              key={partner.id}
              className="partner-logo"
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={128}
                height={41}
                className="logo-image"
              />
            </div>
          ))}
          {/* Duplicate logos for seamless loop on mobile */}
          {partnersData.map((partner) => (
            <div
              key={`duplicate-${partner.id}`}
              className="partner-logo mobile-duplicate"
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={128}
                height={41}
                className="logo-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
