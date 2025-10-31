'use client';

import { useRouter } from 'next/navigation';
import './PropaneSolutionsSection.css';

export default function PropaneSolutionsSection() {
  const router = useRouter();

  const handleRequestQuote = () => {
    router.push('/contact');
  };

  const handleLearnMore = () => {
    router.push('/about');
  };

  return (
    <section className="propane-solutions-section">
      <div className="propane-solutions-container">
        <div className="propane-solutions-content">
          <div className="propane-solutions-left">
            <h2 className="propane-solutions-title">
              Reliable Propane Solutions for Your Home
            </h2>
          </div>
          
          <div className="propane-solutions-right">
            <p className="propane-solutions-description">
              Experience the warmth and comfort of propane with our safe and affordable solutions. Enjoy peace of mind knowing that your home is powered by a reliable energy source.
            </p>
            
            <div className="propane-solutions-buttons">
              <button onClick={handleRequestQuote} className="propane-solutions-button">
                Request A Quote →
              </button>
              <button onClick={handleLearnMore} className="propane-learn-more-button">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
