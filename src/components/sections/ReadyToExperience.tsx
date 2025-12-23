"use client"

import "./ReadyToExperience.css"

export default function ReadyToExperience() {
  const handleStartPartnership = () => {
    console.log("Start partnership clicked")
  }

  return (
    <section className="ready-to-experience-section">
      <div className="ready-to-experience-container">
        <div className="ready-to-experience-content">
          <h2 className="ready-to-experience-title">
            Ready to Experience These Benefits?
          </h2>
          <p className="ready-to-experience-description">
            Join thousands of Florida businesses that trust FloriGas for their
            propane needs.
          </p>

          <button
            onClick={handleStartPartnership}
            className="ready-to-experience-button"
          >
            Start Your Partnership Today
          </button>
        </div>
      </div>
    </section>
  )
}
