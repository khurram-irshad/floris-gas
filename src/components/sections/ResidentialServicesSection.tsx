'use client';

import Image from 'next/image';
import './ResidentialServicesSection.css';

const servicesData = [
  {
    id: 1,
    title: 'Safe, Affordable, and Convenient Propane Services for Families.',
    description: 'Reliable propane solutions, cost-effective pricing, and safety-first services to enhance your home comfort.',
    image: '/card-1.png',
    buttonText: 'Services',
    buttonColor: 'blue'
  },
  {
    id: 2,
    title: 'Dependable Backup Generators for Peace of Mind During Outages.',
    description: 'Our backup generators ensure your home stays powered when you need it most.',
    image: '/card-2.png',
    buttonText: 'Generation',
    buttonColor: 'blue'
  },
  {
    id: 3,
    title: 'Transform Your Outdoor Living Space with Propane Solutions.',
    description: 'From grills to patio heaters, we make your outdoor experience enjoyable year-round.',
    image: '/card-3.png',
    buttonText: 'Outdoor',
    buttonColor: 'blue'
  }
];

export default function ResidentialServicesSection() {
  return (
    <section className="residential-services-section">
      <div className="residential-services-container">
        {/* Header */}
        <div className="residential-services-header">
          <h2 className="residential-services-title">
            Comprehensive Propane Solutions for Every Aspect of Your Home.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="residential-services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="residential-service-card">
              <div className="residential-service-image-container">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="residential-service-image"
                />
              </div>
              <div className="residential-service-content">
                <h3 className="residential-service-title">{service.title}</h3>
                <p className="residential-service-description">{service.description}</p>
                <button className={`residential-service-button ${service.buttonColor}`}>
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
