'use client';

import Image from 'next/image';
import './PartnersSection.css';

const partnersData = [
  {
    id: 1,
    name: 'Google',
    logo: '/google.svg',
    alt: 'Google Logo'
  },
  {
    id: 2,
    name: 'Apple',
    logo: '/Apple.svg',
    alt: 'Apple Logo'
  },
  {
    id: 3,
    name: 'Slack',
    logo: '/Slack.svg',
    alt: 'Slack Logo'
  },
  {
    id: 4,
    name: 'Amazon',
    logo: '/amazon.svg',
    alt: 'Amazon Logo'
  },
  {
    id: 5,
    name: 'Microsoft',
    logo: '/microsoft.svg',
    alt: 'Microsoft Logo'
  },
  {
    id: 6,
    name: 'Airbnb',
    logo: '/Airbnb.svg',
    alt: 'Airbnb Logo'
  }
];

export default function PartnersSection() {
  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2 className="partners-title">Trusted by Top Providers and Partners</h2>
        <div className="partners-grid">
          {partnersData.map((partner) => (
            <div key={partner.id} className="partner-logo">
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={128}
                height={41}
                className="logo-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
