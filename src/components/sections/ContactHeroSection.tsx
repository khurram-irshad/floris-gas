'use client';

import Image from 'next/image';
import './ContactHeroSection.css';

export default function ContactHeroSection() {
  // const handleRequestQuote = () => {
  //   console.log('Request A Quote clicked');
  // };

  // const handleContactNow = () => {
  //   console.log('Contact Now clicked');
  // };

  return (
    <section className="contact-hero-section">
      <div className="contact-hero-background">
        <Image
          src="/contact-hero.png"
          alt="Contact FloriGAS Background"
          fill
          className="contact-hero-bg-image"
          priority
        />
        <div className="contact-hero-overlay"></div>
      </div>
      
      <div className="contact-hero-container">
      </div>
    </section>
  );
}
