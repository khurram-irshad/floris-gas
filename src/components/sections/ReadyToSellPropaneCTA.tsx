'use client';

import './ReadyToSellPropaneCTA.css';

export default function ReadyToSellPropaneCTA() {
  const handleApplyNow = () => {
    console.log('Apply Now clicked');
  };

  const handleScheduleConsultation = () => {
    console.log('Schedule Consultation clicked');
  };

  return (
    <section className="ready-to-sell-propane-section">
      <div className="ready-to-sell-propane-container">
        <div className="ready-to-sell-propane-content">
          <h2 className="ready-to-sell-propane-title">
            Ready to Sell Propane?
          </h2>
          <h3 className="ready-to-sell-propane-subtitle">
            Become a FloriGAS Partner Today
          </h3>
          <p className="ready-to-sell-propane-description">
            Join hundreds of successful businesses across Florida who are earning with propane<br />
            sales. Start your profitable partnership with the most trusted name in propane.
          </p>
          
          <div className="ready-to-sell-propane-buttons">
            <button 
              onClick={handleApplyNow}
              className="ready-to-sell-propane-button primary"
            >
              Apply Now →
            </button>
            <button 
              onClick={handleScheduleConsultation}
              className="ready-to-sell-propane-button"
            >
              Schedule Consultation
            </button>
          </div>
        </div>

        <div className="ready-to-sell-propane-stats">
          <div className="stat-item-sell">
            <div className="sell-propane-stats-number">500+</div>
            <div className="sell-propane-stats-label">Partner Locations</div>
          </div>
          <div className="stat-item-sell">
            <div className="sell-propane-stats-number">24/7</div>
            <div className="sell-propane-stats-label">Emergency Support</div>
          </div>
          <div className="stat-item-sell">
            <div className="sell-propane-stats-number">98%</div>
            <div className="sell-propane-stats-label">Partner Satisfaction</div>
          </div>
          <div className="stat-item-sell">
            <div className="sell-propane-stats-number">30+</div>
            <div className="sell-propane-stats-label">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
