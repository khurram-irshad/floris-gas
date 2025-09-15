'use client';

import Image from 'next/image';
import './CommercialHeroSection.css';

const CommercialHeroSection = () => {
  return (
    <section className="commercial-hero-section">
      <div className="commercial-hero-container">
        <Image
          src="/commercial-hero-section.png"
          alt="Commercial Hero Section"
          fill
          className="commercial-hero-image"
          priority
        />
      </div>
    </section>
  );
};

export default CommercialHeroSection;
