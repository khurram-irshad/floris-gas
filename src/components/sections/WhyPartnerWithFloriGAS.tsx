'use client';

import Image from 'next/image';
import './WhyPartnerWithFloriGAS.css';

const partnerBenefits = [
  {
    id: 1,
    icon: '/p-trusted.jpg', 
    title: 'Trusted Since 1995',
    description: 'Join a proven leader in the propane industry with nearly 30 years of excellence and reliability in Florida.'
  },
  {
    id: 2,
    icon: '/p-bulk.jpg', 
    title: 'Bulk Delivery',
    description: 'Enjoy competitive wholesale pricing that allows for strong profit margins on every propane tank sold.'
  },
  {
    id: 3,
    icon: '/p-safety.jpg', 
    title: 'Safety Compliance',
    description: 'Never worry about stockouts with our guaranteed supply chain and flexible delivery scheduling.'
  },
  {
    id: 4,
    icon: '/p-priority.jpg',
    title: 'Priority Support',
    description: 'Receive professional marketing materials, signage, and promotional support to drive sales.'
  },
  {
    id: 5,
    icon: '/p-contract.jpg', 
    title: 'Contract Flexibility',
    description: 'Complete training programs ensure your team handles propane safely and meets all regulations.'
  },
  {
    id: 6,
    icon: '/p-equipment.jpg', 
    title: 'Equipment Services',
    description: '24/7 partner support team ready to help with orders, questions, and business growth strategies.'
  }
];

export default function WhyPartnerWithFloriGAS() {
  const handleRequestQuote = () => {
    console.log('Request quote clicked');
  };

  const handleLearnMore = () => {
    console.log('Learn more clicked');
  };

  return (
    <section className="why-partner-section">
      <div className="why-partner-container">
        <div className="why-partner-header">
          <h2 className="why-partner-title">
            Why Partner with FloriGAS?
          </h2>
          <p className="why-partner-description">
            Join a network of successful partners who trust FloriGAS for reliable supply,<br />
            strong support, and profitable propane sales opportunities.
          </p>
        </div>

        <div className="partner-benefits-grid">
          {partnerBenefits.map((benefit) => (
            <div key={benefit.id} className="partner-benefit-card">
              <div className="benefit-icon-container">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={48}
                  height={48}
                  className="benefit-icon"
                />
              </div>
              
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="why-partner-actions">
          <button 
            onClick={handleRequestQuote}
            className="why-partner-button request-quote"
          >
            Request A Quote →
          </button>
          <button 
            onClick={handleLearnMore}
            className="why-partner-button learn-more"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
