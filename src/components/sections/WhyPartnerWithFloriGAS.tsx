'use client';

import Image from 'next/image';
import './WhyPartnerWithFloriGAS.css';
import { useRouter } from 'next/navigation';


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
    title: 'Reliable Service',
    description: 'Through flexible routing and distribution centers across multiple states, we are able to provide retail stores with consistent supply.'
  },
  {
    id: 3,
    icon: '/p-safety.jpg', 
    title: 'Safety Compliance',
    description: 'Our equipment is in compliance with all state regulations. FloriGas\'s in-house licensing department can also assist with licensing specific to your location.'
  },
  {
    id: 4,
    icon: '/p-priority.jpg',
    title: 'Priority Support',
    description: '24/7 partner support team ready to help with orders, questions, and business growth strategies. Always speak with a live person in our offices.'
  },
  {
    id: 5,
    icon: '/p-contract.jpg', 
    title: 'Favorable Contract Structure',
    description: 'Enjoy competitive pricing that allows for strong profit margin on tanks sold. All products are on consignment, only pay for what is sold.'
  },
  {
    id: 6,
    icon: '/p-equipment.jpg', 
    title: 'Equipment Services',
    description: 'Customers receive all new equipment. Marketing materials, signage, and promotional support to drive sales are also available.'
  }
];

export default function WhyPartnerWithFloriGAS() {
  const router = useRouter();
  const handleRequestQuote = () => {
    router.push('/contact');
  };

  const handleLearnMore = () => {
    router.push('/about');
  };

  return (
    <section className="why-partner-section">
      <div className="why-partner-container">
        <div className="why-partner-header">
          <h2 className="why-partner-title">
            Why Partner with FloriGas
          </h2>
          <p className="why-partner-description">
            Join a network of successful partners who trust FloriGas for reliable supply, strong support, and profitable propane sales opportunities.
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
