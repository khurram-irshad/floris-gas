'use client';

import Image from 'next/image';
import './CaseStudy.css';
import { useRouter } from 'next/navigation';

export default function CaseStudy() {
  const router = useRouter();

  const handleReadMoreCaseStudies = () => {
    router.push('/case-studies');
  };

  return (
    <section className="case-study-section">
      <div className="case-study-container">
        <div className="case-study-content">
          <div className="case-study-left">
            <div className="case-study-image-container">
              <Image
                src="/c-chef.jpg"
                alt="Marina Bay Restaurant Group Chef"
                fill
                className="case-study-image"
              />
            </div>
          </div>
          
          <div className="case-study-right">
            <div className="case-study-label">Case Study</div>
            
            <h2 className="case-study-title">
              Marina Bay Restaurant Group
            </h2>
            
            {/* <p className="case-study-subtitle">
              How we helped a growing restaurant chain reduce costs by 35% while improving reliability across 12 locations.
            </p> */}
            
              <div className="case-study-sections">
                <div className="case-study-item challenge">
                  <div className="case-study-item-header">
                    <div className="case-study-icon">
                      <Image
                        src="/alert-circle.png"
                        alt="Challenge"
                        width={16}
                        height={16}
                      />
                    </div>
                    <h4 className="case-study-item-title challenge">The Challenge</h4>
                  </div>
                  <div className="case-study-item-content">
                    <p className="case-study-item-text">
                      Marina Bay Restaurant Group was experiencing inconsistent propane supply, high costs, and safety concerns across their expanding chain of waterfront restaurants.
                    </p>
                  </div>
                </div>
                
                <div className="case-study-item solution">
                  <div className="case-study-item-header">
                    <div className="case-study-icon">
                      <Image
                        src="/idea.png"
                        alt="Solution"
                        width={16}
                        height={16}
                      />
                    </div>
                    <h4 className="case-study-item-title solution">Our Solution</h4>
                  </div>
                  <div className="case-study-item-content">
                    <p className="case-study-item-text">
                      We implemented a comprehensive commercial program with bulk delivery scheduling, safety training, and 24/7 support across all locations.
                    </p>
                  </div>
                </div>
                
                <div className="case-study-item result">
                  <div className="case-study-item-header">
                    <div className="case-study-icon">
                      <Image
                        src="/champion.png"
                        alt="Result"
                        width={16}
                        height={16}
                      />
                    </div>
                    <h4 className="case-study-item-title result">The Result</h4>
                  </div>
                  <div className="case-study-item-content">
                    <div className="case-study-results">
                      <div className="result-stat cost">
                        <div className="stat-number cost">35%</div>
                        <div className="stat-label">Cost Reduction</div>
                      </div>
                      <div className="result-stat uptime">
                        <div className="stat-number uptime">99.9%</div>
                        <div className="stat-label">Uptime</div>
                      </div>
                      <div className="result-stat locations">
                        <div className="stat-number locations">12+</div>
                        <div className="stat-label">Locations Served</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            <div className="case-study-testimonial">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  &quot;FloriGas transformed our operations. We went from worrying about propane supply to focusing on what we do best - serving great food to our customers.&quot;
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <Image
                      src="/avatar-4.jpg"
                      alt="Sarah Martinez"
                      width={40}
                      height={40}
                      className="avatar-image"
                    />
                  </div>
                  <div className="author-info">
                    <div className="author-name">Sarah Martinez</div>
                    <div className="author-title">Operations Director</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="case-study-actions">
          <button 
            onClick={handleReadMoreCaseStudies}
            className="case-study-button blue"
          >
            Read More Case Studies
            <Image
              src="/card-arrow.png"
              alt="Arrow"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
