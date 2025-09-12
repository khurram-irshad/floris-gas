'use client';

import Image from 'next/image';
import './ResidentialHeroSection.css';

export default function ResidentialHeroSection() {
  const handleGetStarted = () => {
    // Handle get started logic
    console.log('Get started clicked');
  };

  const handleLearnMore = () => {
    // Handle learn more logic
    console.log('Learn more clicked');
  };

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
  );
}
