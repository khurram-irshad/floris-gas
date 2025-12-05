'use client';

import Image from 'next/image';
import './AboutHeroSection.css';
import { useRouter } from 'next/navigation';
export default function AboutHeroSection() {
  const router = useRouter();

  const handleRequestQuote = () => {
    router.push('/contact');
  };

  const handleContactNow = () => {
    router.push('/contact');
  };

  return (
    <section className="about-hero-section">
      <div className="about-hero-background">
        <Image
          src="/about-hero-section.png"
          alt="About FloriGas Background"
          fill
          className="about-hero-bg-image"
          priority
        />
        <div className="about-hero-overlay"></div>
      </div>
      
      <div className="about-hero-container">
        <div className="about-hero-content">
          <h1 className="about-hero-title">
            Your Growth Journey Begins with<br />
            FloriGas <span className="highlight-text">Propane</span>
          </h1>
          
          <p className="about-hero-description">
            At FloriGas Inc, we&apos;re your trusted full-service propane supplier in Florida — delivering expert<br />
            service, reliable supply, and customer care built on respect, trust, and integrity.
          </p>
          
          <div className="about-hero-buttons">
            <button 
              onClick={handleRequestQuote}
              className="about-hero-button primary"
            >
              Request A Quote →
            </button>
            <button 
              onClick={handleContactNow}
              className="about-hero-button secondary"
            >
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
