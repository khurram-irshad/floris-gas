'use client';

import Image from 'next/image';
import './OurValuesSection.css';

export default function OurValuesSection() {
  return (
    <section className="our-values-section">
      <div className="our-values-container">
        {/* Header */}
        <div className="our-values-header">
          <h2 className="our-values-title">Our Values</h2>
          <p className="our-values-description">
            Safety, reliability, integrity, and community are at the heart of everything we do guiding our<br />
            commitment to deliver trusted propane services.
          </p>
        </div>

        {/* Main Content Wrapper */}
        <div className="values-content-wrapper">
          <div className="our-values-grid">
            {/* Left Side - Values */}
            <div className="values-left-section">
              {/* Priority */}
              <div className="value-item">
                <div className="value-content">
                  <h4 className="value-title">Priority</h4>
                  <p className="value-description">
                    Flori Gas ensuring the safety as our top priorities.
                  </p>
                </div>
                <div className="value-icon">
                  <Image
                    src="/priority.png"
                    alt="Priority"
                    width={48}
                    height={48}
                  />
                </div>
              </div>

              {/* Reliability */}
              <div className="value-item">
                <div className="value-content">
                  <h4 className="value-title">Reliability</h4>
                  <p className="value-description">
                    Ensuring peace of mind through safe and efficient propane delivery.
                  </p>
                </div>
                <div className="value-icon">
                  <Image
                    src="/reliablity.png"
                    alt="Reliability"
                    width={48}
                    height={48}
                  />
                </div>
              </div>

              {/* Integrity */}
              <div className="value-item">
                <div className="value-content">
                  <h4 className="value-title">Integrity</h4>
                  <p className="value-description">
                    Integrity guiding every service and commitment.
                  </p>
                </div>
                <div className="value-icon">
                  <Image
                    src="/integrity.png"
                    alt="Integrity"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
            </div>

            {/* Center - Large Image */}
            <div className="values-center-section">
              <div className="values-main-image">
                <Image
                  src="/our-values.jpg"
                  alt="FloriGas team members"
                  width={400}
                  height={400}
                  className="values-main-img"
                />
              </div>
            </div>

            {/* Right Side - Values */}
            <div className="values-right-section">
              {/* Trusted */}
              <div className="value-item">
                <div className="value-icon">
                  <Image
                    src="/hand-trusted.png"
                    alt="Trusted"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="value-content">
                  <h4 className="value-title-right">Trusted</h4>
                  <p className="value-description">
                    Upholding the highest standards in every operation.
                  </p>
                </div>
              </div>

              {/* Communities */}
              <div className="value-item">
                <div className="value-icon">
                  <Image
                    src="/community.png"
                    alt="Communities"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="value-content">
                  <h4 className="value-title-right">Communities</h4>
                  <p className="value-description">
                    Building stronger communities through trusted energy solutions.
                  </p>
                </div>
              </div>

              {/* Customer service */}
              <div className="value-item">
                <div className="value-icon">
                  <Image
                    src="/customer-service.png"
                    alt="Customer service"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="value-content">
                  <h4 className="value-title-right">Customer service</h4>
                  <p className="value-description">
                    Dedicated to transparent, honest, and customer-first service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
