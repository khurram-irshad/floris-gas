'use client';

import './NextSuccessStoryCTA.css';

export default function NextSuccessStoryCTA() {
  const handleGetStarted = () => {
    console.log('Get Started clicked');
  };

  const handleContactUs = () => {
    console.log('Contact Us clicked');
  };

  return (
    <section className="next-success-story-section">
      <div className="next-success-story-container">
        <div className="next-success-story-content">
          <h2 className="next-success-story-title">
            Want to Be Our Next Success Story?
          </h2>
          <p className="next-success-story-description">
            Partner with Florida's most trusted propane provider and join thousands of satisfied<br />
            customers who rely on our proven expertise and exceptional service.
          </p>

          <div className="next-success-story-buttons">
            <button
              onClick={handleGetStarted}
              className="next-success-story-button primary"
            >
              Get Started →
            </button>
            <button
              onClick={handleContactUs}
              className="next-success-story-button"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="next-success-story-stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Partner Locations</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Emergency Support</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Partner Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">30+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
