'use client';

import Image from 'next/image';
import './KeyFeaturesSection.css';
import { useRouter } from 'next/navigation';

const features = [
  {
    id: 1,
    icon: "/r-affordable.jpg",
    title: "Affordable Pricing for Every Household",
    description: "Enjoy competitive rates without compromising on quality."
  },
  {
    id: 2,
    icon: "/r-convenient.jpg",
    title: "Convenient Delivery Right to Your Doorstep",
    description: "We ensure timely and hassle-free delivery for your convenience."
  },
  {
    id: 3,
    icon: "/r-energy.jpg",
    title: "Energy-Efficient Solutions for Your Home",
    description: "Reduce your energy bills while enjoying superior performance."
  }
];

export default function KeyFeaturesSection() {
  const router = useRouter();

  const handleRequestQuote = () => {
    router.push('/contact');
  };

  const handleLearnMore = () => {
    router.push('/about');
  };

  return (
    <section className="key-features-section">
      <div className="key-features-container">
        <div className="key-features-header">
          <p className="key-features-subtitle">Safety</p>
          <h2 className="key-features-title">
            Key Features of Our Propane Services
          </h2>
          <p className="key-features-description">
            Our propane services prioritize your family&apos;s safety and comfort. Experience reliable solutions that fit your budget.
          </p>
        </div>

        <div className="key-features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="key-feature-card">
              <div className="key-feature-icon">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                  className="feature-icon-image"
                />
              </div>
              <h3 className="key-feature-title">{feature.title}</h3>
              <p className="key-feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="key-features-buttons">
          <button onClick={handleRequestQuote} className="key-features-button primary">
            Request A Quote →
          </button>
          <button onClick={handleLearnMore} className="key-features-button secondary">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
