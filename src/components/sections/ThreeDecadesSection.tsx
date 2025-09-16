'use client';

import Image from 'next/image';
import './ThreeDecadesSection.css';

const features = [
  {
    id: 1,
    icon: '/faster.png',
    title: 'Residential Excellence',
    description: 'Thousands of Florida families trust us for consistent, safe propane delivery to power their homes, grills, and outdoor living spaces.'
  },
  {
    id: 2,
    icon: '/faster.png',
    title: 'Commercial Leadership',
    description: 'From restaurants to manufacturing, our commercial solutions power businesses across Florida with unmatched reliability and cost efficiency.'
  },
  {
    id: 3,
    icon: '/faster.png',
    title: 'Partnership Growth',
    description: 'Our network of retail partners across Florida generates new revenue streams while serving their communities with quality propane solutions.'
  }
];

const whyChooseFeatures = [
  {
    id: 1,
    icon: '/checkmark-badge.png',
    text: 'Established 1995 – Three decades of expertise'
  },
  {
    id: 2,
    icon: '/checkmark-badge.png',
    text: '10,000+ successful deliveries annually'
  },
  {
    id: 3,
    icon: '/checkmark-badge.png',
    text: 'Long-term partnerships built on trust'
  },
  {
    id: 4,
    icon: '/checkmark-badge.png',
    text: 'Comprehensive safety and compliance standards'
  }
];

export default function ThreeDecadesSection() {
  return (
    <section className="three-decades-section">
      <div className="three-decades-container">
        {/* Header */}
        <div className="three-decades-header">
          <div className="trusted-badge">Trusted Since 1995</div>
          <h2 className="three-decades-title">Three Decades of Proven Success</h2>
          <p className="three-decades-description">
            For over 30 years, FloriGAS has been Florida's most trusted propane provider. From small 
            residential needs to large commercial operations, we've built lasting partnerships through 
            reliability, expertise, and unwavering commitment to service excellence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="three-decades-features">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon-container">
                <Image
                  src={feature.icon}
                  alt="Feature icon"
                  width={48}
                  height={48}
                  className="feature-icon"
                />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Section */}
        <div className="why-choose-section">
          <div className="why-choose-left">
            <h3 className="why-choose-title">Why Florida Chooses FloriGAS</h3>
            <div className="why-choose-features">
              {whyChooseFeatures.map((item) => (
                <div key={item.id} className="why-choose-item">
                  <div className="why-choose-icon">
                    <Image
                      src={item.icon}
                      alt="Checkmark"
                      width={16}
                      height={16}
                      className="checkmark-icon"
                    />
                  </div>
                  <span className="why-choose-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="why-choose-right">
            <div className="why-choose-image-container">
              <Image
                src="/card-1.png"
                alt="FloriGAS service professional"
                fill
                className="why-choose-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
