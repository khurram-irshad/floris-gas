'use client';

import './PowerYourBusinessCTA.css';

export default function PowerYourBusinessCTA() {
  const handleTalkToExpert = () => {
    console.log('Talk To An Expert clicked');
  };

  const handleGetInstantQuote = () => {
    console.log('Get Instant Quote clicked');
  };

  return (
    <section className="power-your-business-section">
      <div className="power-your-business-container">
        <div className="power-your-business-content">
          <h2 className="power-your-business-title">
            Power Your Business with FloriGAS
          </h2>
          <p className="power-your-business-description">
            Join thousands of Florida businesses that rely on our expertise, reliability,<br />
            and exceptional service for their propane needs.
          </p>
        </div>

        <div className="power-your-business-stats">
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="power-your-business-stat-label">Emergency Support</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5,000+</div>
            <div className="power-your-business-stat-label">Businesses Served</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">30+</div>
            <div className="power-your-business-stat-label">Years Experience</div>
          </div>
        </div>
        
        <div className="power-your-business-buttons">
          <button 
            onClick={handleTalkToExpert}
            className="power-your-business-button primary"
          >
            Talk To An Expert →
          </button>
          <button 
            onClick={handleGetInstantQuote}
            className="power-your-business-button"
          >
            Get Instant Quote
          </button>
        </div>
      </div>
    </section>
  );
}
