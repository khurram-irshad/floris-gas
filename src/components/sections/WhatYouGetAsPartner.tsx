'use client';

import Image from 'next/image';
import './WhatYouGetAsPartner.css';

const partnerFeatures = [
  {
    id: 1,
    icon: '/faster.png', // You can replace with specific icons
    title: 'Bulk Supply Delivery',
    description: 'Regular, scheduled deliveries of propane tanks with flexible inventory management.',
    features: [
      'Guaranteed supply chain',
      'Flexible delivery schedule',
      'Emergency restocking',
      'Inventory management tools'
    ]
  },
  {
    id: 2,
    icon: '/faster.png', // You can replace with specific icons
    title: 'Tank & Equipment Support',
    description: 'Complete tank management including display units, safety equipment, and maintenance.',
    features: [
      'Professional display units',
      'Safety equipment provided',
      'Tank maintenance service',
      'Equipment replacement guarantee'
    ]
  },
  {
    id: 3,
    icon: '/faster.png', // You can replace with specific icons
    title: 'Safety Training Program',
    description: 'Comprehensive safety training for you and your staff on propane handling and regulations.',
    features: [
      'Initial safety certification',
      'Ongoing training updates',
      'Compliance documentation',
      'Emergency procedures training'
    ]
  },
  {
    id: 4,
    icon: '/faster.png', // You can replace with specific icons
    title: 'Marketing Materials',
    description: 'Professional marketing materials and promotional support to drive propane sales.',
    features: [
      'Professional signage',
      'Promotional materials',
      'Digital marketing assets',
      'Seasonal campaign support'
    ]
  },
  {
    id: 5,
    icon: '/faster.png', // You can replace with specific icons
    title: 'Dedicated Account Manager',
    description: 'Personal account manager to help optimize your propane business and resolve any issues.',
    features: [
      'Personal account manager',
      '24/7 emergency support',
      'Business growth consultation',
      'Performance analytics'
    ]
  },
  {
    id: 6,
    icon: '/faster.png', // You can replace with specific icons
    title: 'Insurance & Compliance',
    description: 'Full insurance coverage and compliance support to protect your business.',
    features: [
      'Liability insurance coverage',
      'Regulatory compliance support',
      'Documentation assistance',
      'Legal protection'
    ]
  }
];

export default function WhatYouGetAsPartner() {
  return (
    <section className="what-you-get-section">
      <div className="what-you-get-container">
        <div className="what-you-get-header">
          <h2 className="what-you-get-title">
            What You Get as a Partner
          </h2>
          <p className="what-you-get-description">
            FloriGas provides everything you need to successfully sell propane and grow<br />
            your business. No hidden costs, no surprises – just comprehensive support.
          </p>
        </div>

        <div className="partner-features-grid">
          {partnerFeatures.map((feature) => (
            <div key={feature.id} className="partner-feature-card">
              <div className="feature-icon-container">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="feature-icon"
                />
              </div>
              
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                
                <div className="feature-list">
                  {feature.features.map((item, index) => (
                    <div key={index} className="feature-item">
                      <div className="feature-checkmark">
                        <Image
                          src="/checkmark-badge.png"
                          alt="Checkmark"
                          width={16}
                          height={16}
                          className="checkmark-icon"
                        />
                      </div>
                      <span className="feature-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
