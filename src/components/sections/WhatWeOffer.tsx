'use client';

import Image from 'next/image';
import './WhatWeOffer.css';

export default function WhatWeOffer() {
  const offerItems = [
    {
      id: 1,
      title: 'Tank Exchange',
      description: 'FloriGas offers convenient tank exchange services through our vast network of retailers across Florida.',
      image: '/sell-propane.jpg',
      alt: 'Tank Exchange Service'
    },
    {
      id: 2,
      title: 'Tank Refill',
      description: 'Refills through our delivery service. Our fleet delivers across South Florida, Tampa, and Georgia. Call to schedule a delivery.',
      image: '/card-1.png',
      alt: 'Tank Refill Service'
    },
    {
      id: 3,
      title: 'Residential Propane Parts',
      description: 'Discover our selection of propane tanks and accessories for homes and businesses across Florida. For your safety, installations.',
      image: '/residential-offer.svg',
      alt: 'Residential Propane Parts'
    }
  ];

  return (
    <section className="what-we-offer-section">
      <div className="what-we-offer-container">
        {/* Header */}
        <div className="what-we-offer-header">
          <h2 className="what-we-offer-title">
            What We Offer
          </h2>
          <p className="what-we-offer-subtitle">
            Keep your home warm and comfortable year-round with competitive prices
            and reliable fuel delivery.
          </p>
        </div>

        {/* Offer Grid */}
        <div className="what-we-offer-grid">
          {offerItems.map((item) => (
            <div key={item.id} className="offer-card">
              <div className="offer-image-container">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="offer-image"
                />
              </div>
              <div className="offer-content">
                <h3 className="offer-title">{item.title}</h3>
                <p className="offer-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
