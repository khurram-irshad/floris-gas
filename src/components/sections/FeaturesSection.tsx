'use client';

import Image from 'next/image';
import './FeaturesSection.css';

const featuresData = [
  {
    id: 1,
    title: 'Faster Delivery Times',
    description: 'Average 2-hour response time vs competitors 4-6 hours',
    icon: '/faster.png',
    buttonText: 'Learn More',
    size: 'normal'
  },
  {
    id: 2,
    title: 'More Locations',
    description: '500+ service points across the region for your convenience',
    icon: '/location.png',
    buttonText: 'Learn More',
    size: 'normal'
  },
  {
    id: 3,
    title: 'Safety Inspections',
    description: 'Industry-leading safety record with certified technicians',
    icon: '/protection.png',
    buttonText: 'Learn More',
    size: 'normal'
  },
  {
    id: 4,
    title: 'Trusted Since 1995',
    description: 'Delivering reliable propane services with nearly three decades of proven excellence',
    icon: '/trusted.png',
    buttonText: 'Learn More',
    size: 'large'
  },
  {
    id: 5,
    title: 'Experienced Drivers',
    description: 'Skilled local professionals ensuring safe and on-time deliveries every day.',
    icon: '/experienced.png',
    buttonText: 'Learn More',
    size: 'large'
  }
];

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="features-container">
        {/* Header */}
        <div className="features-header">
          <h2 className="features-title">How can we help?</h2>
          <p className="features-subtitle">
            At Florigas Inc. we pride ourselves on offering top-notch customer care and professional
            expertise as your full-service propane supplier in Florida.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {featuresData.map((feature) => (
            <div key={feature.id} className={`feature-card ${feature.size}`}>
              <div className="feature-icon">
                <Image src={feature.icon} alt={feature.title} width={48} height={48} />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                {/* <button className="feature-button">
                  {feature.buttonText}
                  <Image src="/card-arrow.png" alt="Arrow" width={12} height={12} />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
