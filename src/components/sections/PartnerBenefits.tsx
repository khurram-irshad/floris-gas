'use client';

import Image from 'next/image';
import './PartnerBenefits.css';
import { useRouter } from 'next/navigation';

const partnerBenefits = [
  {
    id: 1,
    text: 'Boost revenue with high-margin propane sales'
  },
  {
    id: 2,
    text: 'Expand your customer base with new propane customers'
  },
  {
    id: 3,
    text: 'Depend on reliable supply chain with guaranteed inventory'
  },
  {
    id: 4,
    text: 'Access 24/7 partner support and emergency assistance'
  },
  {
    id: 5,
    text: 'Receive comprehensive safety training and certification'
  },
  {
    id: 6,
    text: 'Get marketing materials and promotional support'
  },
  {
    id: 7,
    text: 'Benefit from flexible delivery scheduling'
  },
  {
    id: 8,
    text: 'Enjoy competitive wholesale pricing structure'
  }
];

export default function PartnerBenefits() {
  const router = useRouter();
  const handleTalkToTeam = () => {
    router.push('/contact');
  };

  return (
    <section className="partner-benefits-section">
      <div className="partner-benefits-container">
        <div className="partner-benefits-content">
          <div className="partner-benefits-left">
            <h2 className="partner-benefits-title">
              Partner Benefits
            </h2>
            <p className="partner-benefits-description">
              When you partner with FloriGas, you&apos;re not just adding a product line – you&apos;re joining a comprehensive support system designed for your success.
            </p>
            
            <div className="benefits-list">
              {partnerBenefits.map((benefit) => (
                <div key={benefit.id} className="benefit-item">
                  <div className="benefit-icon">
                    <Image
                      src="/checkmark-badge.png"
                      alt="Checkmark"
                      width={24}
                      height={24}
                      className="checkmark-icon"
                    />
                  </div>
                  <span className="benefit-text">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            <button 
              onClick={handleTalkToTeam}
              className="partner-benefits-button"
            >
              Talk To Our Team →
            </button>
          </div>
          
          <div className="partner-benefits-right">
            <div className="partner-image-container">
              <Image
                src="/s-partner.jpg"
                alt="Partner with propane tanks"
                fill
                className="partner-image"
              />
              
              <div className="stat-overlay satisfaction">
                <div className="stat-icon satisfaction">
                  <Image
                    src="/checkmark-badge.png"
                    alt="Satisfaction"
                    width={24}
                    height={24}
                    className="stat-icon-img"
                  />
                </div>
                <div className="stat-content">
                  <div className="stat-number-sell-propane">98% Satisfaction Rate</div>
                  <div className="stat-label">Customer Reviews</div>
                </div>
              </div>
              
              <div className="stat-overlay conversion">
                <div className="stat-icon conversion">
                  <Image
                    src="/checkmark-badge.png"
                    alt="Conversion"
                    width={24}
                    height={24}
                    className="stat-icon-img"
                  />
                </div>
                <div className="stat-content">
                  <div className="stat-number-sell-propane">125% Conversion Rate</div>
                  <div className="stat-label">Customer Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
