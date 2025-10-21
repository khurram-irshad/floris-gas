'use client';

import Image from 'next/image';
import './WhatDriveUsSection.css';

export default function WhatDriveUsSection() {
  return (
    <section className="what-drive-us-section">
      <div className="what-drive-us-container">
        {/* Header */}
        <div className="what-drive-us-header">
          <h2 className="what-drive-us-title">What Drive us</h2>
          <p className="what-drive-us-description">
            We go the extra mile by offering reliable products, fair pricing, and exceptional<br />
            service to ensure every customer experience exceeds expectations.
          </p>
        </div>

        {/* Main Content Wrapper */}
        <div className="content-wrapper">
          <div className="why-drive-us-grid">
          {/* Left Side - Mission + Features */}
          <div className="left-section">
            {/* Our Mission */}
            <div className="mission-content">
              <h3 className="mission-title">Our Mission</h3>
              <p className="mission-description">
                Providing reliable and affordable propane solutions that power homes, 
                businesses, and communities across the region.
              </p>
            </div>

            {/* Features Grid */}
            <div className="features-grid">
              {/* Performance */}
              <div className="feature-card">
                <div className="feature-icon">
                  <Image
                    src="/performance.png"
                    alt="Performance"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="feature-title">Performance</h4>
                <p className="feature-description">
                  Reliable propane supply for consistent energy.
                </p>
              </div>

              {/* Safety */}
              <div className="feature-card">
                <div className="feature-icon">
                  <Image
                    src="/safety.png"
                    alt="Safety"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="feature-title">Safety</h4>
                <p className="feature-description">
                  Driving Florida's clean and reliable energy future.
                </p>
              </div>

              {/* Support */}
              <div className="feature-card">
                <div className="feature-icon">
                  <Image
                    src="/support.png"
                    alt="Support"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="feature-title">Support</h4>
                <p className="feature-description">
                  Supporting a low-emission future through cleaner fuel.
                </p>
              </div>

              {/* Commitment */}
              <div className="feature-card">
                <div className="feature-icon">
                  <Image
                    src="/commitment.png"
                    alt="Commitment"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="feature-title">Commitment</h4>
                <p className="feature-description">
                  Committed to reliable and safe energy solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Large Image */}
          <div className="right-section">
            <div className="main-image">
              <Image
                src="/drive-us.png"
                alt="FloriGAS delivery service"
                width={600}
                height={500}
                className="main-img"
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}