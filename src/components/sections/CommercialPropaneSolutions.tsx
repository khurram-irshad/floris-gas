'use client';

import './CommercialPropaneSolutions.css';

export default function CommercialPropaneSolutions() {
  const handleRequestQuote = () => {
    // Handle request quote logic
    console.log('Request quote clicked');
  };

  const handleLearnMore = () => {
    // Handle learn more logic
    console.log('Learn more clicked');
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
              From small restaurants to large-scale operations, FloriGAS delivers the power your business needs with unmatched reliability and service.
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
