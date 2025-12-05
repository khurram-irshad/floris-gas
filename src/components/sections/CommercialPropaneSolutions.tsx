'use client';

import './CommercialPropaneSolutions.css';
import { useRouter } from 'next/navigation';

export default function CommercialPropaneSolutions() {
  const router = useRouter();

  const handleRequestQuote = () => {
    router.push('/contact');
  };

  const handleLearnMore = () => {
   router.push('/about');
  };

  return (
    <section className="commercial-propane-solutions-section">
      <div className="commercial-propane-solutions-container">
        <div className="commercial-propane-solutions-content">
          <div className="commercial-propane-solutions-left">
            <h2 className="commercial-propane-solutions-title">
              Powering Your Business with Reliable Propane.
            </h2>
          </div>
          
          <div className="commercial-propane-solutions-right">
            <p className="commercial-propane-solutions-description">
              From small restaurants to large-scale operations, FloriGas delivers the power your business needs with unmatched reliability and service.
            </p>
            
            <div className="commercial-propane-solutions-buttons">
              <button onClick={handleRequestQuote} className="commercial-propane-solutions-button">
                Request A Quote →
              </button>
              <button onClick={handleLearnMore} className="commercial-propane-learn-more-button">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
