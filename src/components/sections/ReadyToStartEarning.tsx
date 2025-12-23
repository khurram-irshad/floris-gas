"use client"

import "./ReadyToStartEarning.css"

export default function ReadyToStartEarning() {
  const handleBecomePartner = () => {
    console.log("Become a partner today clicked")
  }

  return (
    <section className="ready-to-start-section">
      <div className="ready-to-start-container">
        <div className="ready-to-start-content">
          <h2 className="ready-to-start-title">
            Ready to Start Earning with Propane Sales?
          </h2>
          <p className="ready-to-start-description">
            Join hundreds of successful Florida businesses already partnering
            with FloriGas.
          </p>

          <button
            onClick={handleBecomePartner}
            className="ready-to-start-button"
          >
            Become A Partner Today
          </button>
        </div>
      </div>
    </section>
  )
}
