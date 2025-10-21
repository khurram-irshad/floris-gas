'use client';

import Image from 'next/image';
import './CallToActionBanner.css';

export default function CallToActionBanner() {
  const handleSellPropane = () => {
    console.log('Sell Propane clicked');
  };

  return (
    <section className="cta-banner-section">
      <div className="cta-banner-container">
        <div className="cta-banner-content">
          {/* Left Side - Text Content */}
          <div className="cta-text-content">
            <h2 className="cta-title">
              Your Reliable Trusted<br />
              Gas Service Is Just<br />
              One Call Away
            </h2>
            
            <button 
              onClick={handleSellPropane}
              className="cta-button"
            >
              Sell Propane →
            </button>
          </div>

          {/* Right Side - Person Image */}
          <div className="cta-image-content">
            <Image
              src="/contact-img.png"
              alt="Professional gas service technician"
              width={400}
              height={300}
              className="cta-person-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
