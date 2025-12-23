"use client"

import "./CaseStudiesStatsSection.css"

export default function CaseStudiesStatsSection() {
  return (
    <section className="case-studies-stats-section">
      <div className="case-studies-stats-container">
        <div className="case-studies-stats-grid">
          <div className="case-studies-stat-item">
            <div className="case-studies-stat-number">24/7</div>
            <div className="case-studies-stat-label">
              Emergency
              <br />
              Support
            </div>
          </div>
          <div className="case-studies-stat-item">
            <div className="case-studies-stat-number">10K+</div>
            <div className="case-studies-stat-label">
              Annual
              <br />
              Deliveries
            </div>
          </div>
          <div className="case-studies-stat-item">
            <div className="case-studies-stat-number">500+</div>
            <div className="case-studies-stat-label">
              Commercial
              <br />
              Clients
            </div>
          </div>
          <div className="case-studies-stat-item">
            <div className="case-studies-stat-number">30+</div>
            <div className="case-studies-stat-label">
              Years
              <br />
              Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
