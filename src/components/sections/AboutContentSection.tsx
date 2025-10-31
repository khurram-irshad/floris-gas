'use client';

import './AboutContentSection.css';
import { useRouter } from 'next/navigation';

export default function AboutContentSection() {
  const router = useRouter();

  const handleRequestQuote = () => {
    router.push('/contact');
  };

  const handleLearnMore = () => {
    router.push('/about');
  };

  return (
    <section className="about-content-section">
      <div className="about-content-container">
        <div className="about-content-wrapper">
          <div className="about-content-left">
            <h2 className="about-content-title">
              Reliable Propane Solutions for Your Home
            </h2>
          </div>
          
          <div className="about-content-right">
            <p className="about-content-description">
              Experience the warmth and comfort of propane with our safe and affordable solutions. Enjoy peace of mind knowing that your home is powered by a reliable energy source.
            </p>
            
            <div className="about-content-buttons">
              <button onClick={handleRequestQuote} className="about-content-button primary">
                Request A Quote →
              </button>
              <button onClick={handleLearnMore} className="about-content-button secondary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
