"use client"

import Image from "next/image"
import "./ResidentialHeroSection.css"

export default function ResidentialHeroSection() {
  return (
    <section className="residential-hero-section">
      <div className="residential-hero-background">
        <Image
          src="/residential-hero-section.png"
          alt="Residential Propane Services"
          fill
          className="residential-hero-image"
          priority
        />
      </div>
    </section>
  )
}
