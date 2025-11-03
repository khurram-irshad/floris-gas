'use client';

import Image from 'next/image';
import './CaseStudiesHeroSection.css';
import { useRouter } from 'next/navigation';

export default function CaseStudiesHeroSection() {  
  const router = useRouter();
  const handleExploreCaseStudies = () => {
    console.log('Explore Case Studies clicked');
  };

  const handleAboutUs = () => {
    router.push('/about');
  };

  return (
    <section className="case-studies-hero-section">
      <div className="case-studies-hero-background">
        <Image
          src="/case-study-hero-section.png"
          alt="Case Studies Background"
          fill
          className="case-studies-hero-bg-image"
          priority
        />
      </div>
      
      <div className="case-studies-hero-container">
        <div className="case-studies-hero-content">
          <h1 className="case-studies-hero-title">
            Partner with FloriGAS. <span className="highlight-text">Sell Propane.</span><br />
            Grow Your Business.
          </h1>
          
          <p className="case-studies-hero-description">
            Join a trusted network and unlock new revenue opportunities with reliable supply &<br />
            full support. Perfect for hardware stores, gas stations, and local distributors.
          </p>
          
          <div className="case-studies-hero-buttons">
            <button 
              onClick={handleExploreCaseStudies}
              className="case-studies-hero-button primary"
            >
              Explore Case Studies →
            </button>
            <button 
              onClick={handleAboutUs}
              className="case-studies-hero-button"
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
