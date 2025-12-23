"use client"

import "./PowerYourBusinessCTA.css"
import { useRouter } from "next/navigation"

export default function PowerYourBusinessCTA() {
  const router = useRouter()

  const handleTalkToExpert = () => {
    router.push("/contact")
    // console.log('Talk To An Expert clicked');
  }

  const handleGetInstantQuote = () => {
    router.push("/contact")
  }

  return (
    <section className="power-your-business-section">
      <div className="power-your-business-container">
        <div className="power-your-business-content">
          <h2 className="power-your-business-title">
            Power Your Business with FloriGas
          </h2>
          <p className="power-your-business-description">
            Join thousands of Florida businesses that rely on our expertise,
            reliability,
            <br />
            and exceptional service for their propane needs.
          </p>
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
        <div className="power-your-business-stats">
          <div className="power-your-business-stat-item">
            <div className="commercial-stat-number">24/7</div>
            <div className="power-your-business-stat-sublabel">
              Emergency Support
            </div>
          </div>
          <div className="power-your-business-stat-item">
            <div className="commercial-stat-number">5,000+</div>
            <div className="power-your-business-stat-sublabel">
              Businesses Served
            </div>
          </div>
          <div className="power-your-business-stat-item">
            <div className="commercial-stat-number">30+</div>
            <div className="power-your-business-stat-sublabel">
              Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
