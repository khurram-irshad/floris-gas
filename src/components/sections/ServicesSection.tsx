'use client';

import Image from 'next/image';
import './ServicesSection.css';

const servicesData = [
  {
    id: 1,
    title: 'Residential Propane Delivery',
    description: 'Convenient, on-time propane delivery to power your home with comfort and reliability.',
    image: '/card-1.png',
    buttonText: 'Get Started',
    buttonColor: 'blue'
  },
  {
    id: 2,
    title: 'Commercial Solutions',
    description: 'Reliable propane solutions tailored to keep your business running smoothly with efficiency and cost-effectiveness.',
    image: '/card-2.png',
    buttonText: 'Get Started',
    buttonColor: 'blue'
  },
  {
    id: 3,
    title: 'Sell Propane',
    description: 'Partner with us to sell propane and grow your business with reliable supply, trusted support, and flexible partnership opportunities.',
    image: '/card-3.png',
    buttonText: 'Get Started',
    buttonColor: 'blue'
  }
];

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <h2 className="services-title">What we do?</h2>
          <p className="services-subtitle">
            At Florigas Inc. we pride ourselves on offering top-notch customer care and professional
            expertise as your full-service propane supplier in Florida.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image-container">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="service-image"
                />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button className={`service-button ${service.buttonColor}`}>
                  {service.buttonText}
                  <Image src="/card-arrow.png" alt="Arrow" width={12} height={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
