'use client';

import Image from 'next/image';
import './OurVisionSection.css';

export default function OurVisionSection() {
  return (
    <section className="our-vision-section">
      <div className="our-vision-container">
        {/* Header */}
        {/* Main Content Wrapper */}
        <div className="vision-content-wrapper">
          <div className="our-vision-grid">
            {/* Left Side - Large Image */}
            <div className="vision-left-section">
              <div className="vision-main-image">
                <Image
                  src="/vision-section.jpg"
                  alt="FloriGas facility"
                  width={600}
                  height={500}
                  className="vision-main-img"
                />
              </div>
            </div>

            {/* Right Side - Vision + Features */}
            <div className="vision-right-section">
              {/* Vision Content */}
              <div className="vision-content">
                <h3 className="vision-content-title">Our Vision</h3>
                <p className="vision-content-description">
                  Driving Florida&apos;s clean, reliable energy future through propane innovation 
                  delivering efficient, sustainable, and cost-effective energy solutions.
                </p>
              </div>

              {/* Features Grid */}
              <div className="vision-features-grid">
                {/* Cost-effective */}
                <div className="vision-feature-card">
                  <div className="vision-feature-icon">
                    <Image
                      src="/cost-effective.png"
                      alt="Cost-effective"
                      width={48}
                      height={48}
                    />
                  </div>
                  <h4 className="vision-feature-title">Cost-effective</h4>
                  <p className="vision-feature-description">
                    Advancing innovation through modern propane solutions.
                  </p>
                </div>

                {/* Sustainable */}
                <div className="vision-feature-card">
                  <div className="vision-feature-icon">
                    <Image
                      src="/sustainable.png"
                      alt="Sustainable"
                      width={48}
                      height={48}
                    />
                  </div>
                  <h4 className="vision-feature-title">Sustainable</h4>
                  <p className="vision-feature-description">
                    Driving Florida&apos;s clean and reliable energy future.
                  </p>
                </div>

                {/* Innovation */}
                <div className="vision-feature-card">
                  <div className="vision-feature-icon">
                    <Image
                      src="/innovation.png"
                      alt="Innovation"
                      width={48}
                      height={48}
                    />
                  </div>
                  <h4 className="vision-feature-title">Innovation</h4>
                  <p className="vision-feature-description">
                    Advancing innovation through modern propane solutions.
                  </p>
                </div>

                {/* Energy Solutions */}
                <div className="vision-feature-card">
                  <div className="vision-feature-icon">
                    <Image
                      src="/enery-solution.png"
                      alt="Energy Solutions"
                      width={48}
                      height={48}
                    />
                  </div>
                  <h4 className="vision-feature-title">Energy Solutions</h4>
                  <p className="vision-feature-description">
                    Committed to reliable and safe energy solutions.
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
