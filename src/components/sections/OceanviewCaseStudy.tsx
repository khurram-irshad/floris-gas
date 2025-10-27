'use client';

import Image from 'next/image';
import './OceanviewCaseStudy.css';

export default function OceanviewCaseStudy() {
  const handleReadMoreCaseStudies = () => {
    console.log('Read more case studies clicked');
  };

  return (
    <section className="oceanview-case-study-section">
      <div className="oceanview-case-study-container">
        <div className="oceanview-case-study-header">
          <div className="oceanview-featured-badge">Featured Success Story</div>
          <h2 className="oceanview-case-study-main-title">Oceanview Resort & Spa</h2>
          <p className="oceanview-case-study-main-description">
            How FloriGAS helped a luxury resort reduce energy costs by 25% while improving service 
            reliability across their entire operation.
          </p>
        </div>

        <div className="oceanview-case-study-content">
          <div className="oceanview-case-study-left">
            <div className="oceanview-case-study-image-container">
              <Image
                src="/case-study-side-image.jpg"
                alt="Oceanview Resort & Spa"
                fill
                className="oceanview-case-study-image"
              />
            </div>
          </div>
          
          <div className="oceanview-case-study-right">
            <h3 className="oceanview-transforming-title">Transforming Resort Operations</h3>
            <p className="oceanview-transforming-description">
              Oceanview Resort & Spa faced rising energy costs and unreliable 
              propane supply that threatened their reputation for excellence. See how 
              FloriGAS delivered a complete solution.
            </p>
            
            <div className="oceanview-case-study-sections">
              <div className="oceanview-case-study-item challenge">
                <div className="oceanview-case-study-item-header">
                  <div className="oceanview-case-study-icon">
                    <Image
                      src="/alert-circle.png"
                      alt="Challenge"
                      width={16}
                      height={16}
                    />
                  </div>
                  <h4 className="oceanview-case-study-item-title challenge">The Challenge</h4>
                </div>
                <div className="oceanview-case-study-item-content">
                  <p className="oceanview-case-study-item-text">
                    Marina Bay Restaurant Group was experiencing inconsistent propane supply, high costs, and safety 
                    concerns across their expanding chain of waterfront restaurants.
                  </p>
                </div>
              </div>
              
              <div className="oceanview-case-study-item solution">
                <div className="oceanview-case-study-item-header">
                  <div className="oceanview-case-study-icon">
                    <Image
                      src="/idea.png"
                      alt="Solution"
                      width={16}
                      height={16}
                    />
                  </div>
                  <h4 className="oceanview-case-study-item-title solution">Our Solution</h4>
                </div>
                <div className="oceanview-case-study-item-content">
                  <p className="oceanview-case-study-item-text">
                    We implemented a comprehensive commercial program with bulk delivery scheduling, energy 
                    auditing, and 24/7 support across all locations.
                  </p>
                </div>
              </div>
              
              <div className="oceanview-case-study-item result">
                <div className="oceanview-case-study-item-header">
                  <div className="oceanview-case-study-icon">
                    <Image
                      src="/champion.png"
                      alt="Result"
                      width={16}
                      height={16}
                    />
                  </div>
                  <h4 className="oceanview-case-study-item-title result">The Result</h4>
                </div>
                <div className="oceanview-case-study-item-content">
                  <div className="oceanview-case-study-results">
                    <div className="oceanview-result-stat cost">
                      <div className="oceanview-stat-number cost">35%</div>
                      <div className="oceanview-stat-label">Cost Reduction</div>
                    </div>
                    <div className="oceanview-result-stat uptime">
                      <div className="oceanview-stat-number uptime">99.9%</div>
                      <div className="oceanview-stat-label">Uptime</div>
                    </div>
                    <div className="oceanview-result-stat locations">
                      <div className="oceanview-stat-number locations">12%</div>
                      <div className="oceanview-stat-label">Locations Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="oceanview-case-study-testimonial">
              <div className="oceanview-testimonial-content">
                <p className="oceanview-testimonial-text">
                  &quot;FloriGAS transformed our operations. We went from worrying about 
                  propane supply to focusing on what we do best - serving great food 
                  to our guests.&quot;
                </p>
                <div className="oceanview-testimonial-author">
                  <div className="oceanview-author-avatar">
                    <Image
                      src="/avatar-4.jpg"
                      alt="Sarah Martinez"
                      width={40}
                      height={40}
                      className="oceanview-avatar-image"
                    />
                  </div>
                  <div className="oceanview-author-info">
                    <div className="oceanview-author-name">Sarah Martinez</div>
                    <div className="oceanview-author-title">Operations Director</div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="oceanview-case-study-actions">
                    <button 
                      onClick={handleReadMoreCaseStudies}
                      className="oceanview-case-study-button"
                    >
                      Read More Case Studies →
                    </button>
            </div> */}
          </div>
        </div>
        
      </div>
    </section>
  );
}
