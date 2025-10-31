'use client';

import Image from 'next/image';
import './SellPropane.css';
import { useRouter } from 'next/navigation';

export default function SellPropane() {
  const router = useRouter();

  const handleBecomePartner = () => {
    router.push('/contact');
  };

  const handleGetInstantQuote = () => {
    router.push('/contact');
  };

  return (
    <section className="sell-propane-section">
      <div className="sell-propane-background">
        <Image
          src="/sell-propane.png"
          alt="Sell Propane Background"
          fill
          className="sell-propane-bg-image"
          priority
        />
        <div className="sell-propane-overlay"></div>
      </div>
      
      <div className="sell-propane-container">
        <div className="sell-propane-content">
          <h1 className="sell-propane-title">
            Partner with FloriGAS. <span className="highlight-text">Sell Propane.</span><br />
            Grow Your Business.
          </h1>
          
          <p className="sell-propane-description">
            Join a trusted network and unlock new revenue opportunities with reliable supply &<br />
            full support. Perfect for hardware stores, gas stations, and local distributors.
          </p>
          
          <div className="sell-propane-buttons">
            <button 
              onClick={handleBecomePartner}
              className="sell-propane-button primary"
            >
              Become A Partner →
            </button>
            <button 
              onClick={handleGetInstantQuote}
              className="sell-propane-button"
            >
              Get Instant Quote
            </button>
          </div>
          
          <div className="sell-propane-stats">
            <div className="stat-item">
              <div className="stats-number">24/7</div>
              <div className="stats-label">Emergency Support</div>
            </div>
            <div className="stat-item">
              <div className="stats-number">5,000+</div>
              <div className="stats-label">Businesses Served</div>
            </div>
            <div className="stat-item">
              <div className="stats-number">30+</div>
              <div className="stats-label">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
