'use client';

import Image from 'next/image';
import './BusinessBenefits.css';
import { useRouter } from 'next/navigation';

const benefitsData = [
  {
    id: 1,
    icon: '/faster.png', 
    title: 'Cost Savings',
    description: 'Reduce operational costs with competitive bulk pricing, volume discounts, and efficient propane solutions that lower your energy expenses.',
    highlight: 'Up to 30% savings on energy costs'
  },
  {
    id: 2,
    icon: '/faster.png', 
    title: 'Bulk Delivery',
    description: 'Scheduled deliveries ensure you never run out. Our fleet delivers when you need it, with flexible scheduling to match your operations.',
    highlight: 'Same-day emergency delivery available'
  },
  {
    id: 3,
    icon: '/faster.png', 
    title: 'Safety Compliance',
    description: 'Meet all industry safety standards with our certified equipment, professional installations, and comprehensive safety training programs.',
    highlight: '100% compliance guarantee'
  },
  {
    id: 4,
    icon: '/faster.png', 
    title: 'Priority Support',
    description: 'Dedicated commercial support team available 24/7 for emergencies, technical support, and account management.',
    highlight: '24/7 emergency response'
  },
  {
    id: 5,
    icon: '/faster.png',
    title: 'Contract Flexibility',
    description: 'Choose from various contract options including short-term, long-term, and seasonal agreements tailored to your business needs.',
    highlight: 'Flexible terms from 1-5 years'
  },
  {
    id: 6,
    icon: '/faster.png',
    title: 'Equipment Services',
    description: 'Complete equipment installation, maintenance, and repair services to help your operations running smoothly and efficiently.',
    highlight: '99% uptime guarantee'
  }
];

export default function BusinessBenefits() {
  const router = useRouter();

  const handleRequestQuote = () => {
    router.push('/contact');
  };

  const handleLearnMore = () => {
    router.push('/about');
  };

  return (
    <section className="business-benefits-section">
      <div className="business-benefits-container">
        <div className="business-benefits-header">
          <p className="business-benefits-subtitle">Industries We Serve</p>
          <h2 className="business-benefits-title">
            Benefits for Your Business
          </h2>
          <p className="business-benefits-description">
            Partner with FloriGas and experience the advantages that keep businesses running efficiently and profitably.
          </p>
        </div>

        <div className="business-benefits-grid">
          {benefitsData.map((benefit) => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefit-icon-container">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={32}
                  height={32}
                  className="benefit-icon"
                />
              </div>
              
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
                <p className="benefit-highlight">{benefit.highlight}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="business-benefits-actions">
          <button 
            onClick={handleRequestQuote}
            className="business-benefits-button blue"
          >
            Request A Quote
            <Image
              src="/card-arrow.png"
              alt="Arrow"
              width={16}
              height={16}
            />
          </button>
          <button 
            onClick={handleLearnMore}
            className="business-benefits-learn-more"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
