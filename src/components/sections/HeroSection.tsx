'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { QuoteFormData } from '@/types';
import './HeroSection.css';

// Constants
const CUSTOMER_AVATARS = [
  { id: 1, src: '/avatar-1.jpg', alt: 'Customer 1' },
  { id: 2, src: '/avatar-2.jpg', alt: 'Customer 2' },
  { id: 3, src: '/avatar-3.jpg', alt: 'Customer 3' },
  { id: 4, src: '/avatar-4.jpg', alt: 'Customer 4' },
];

const STATS = {
  ACTIVE_MEMBERS: '16K+',
  MONTHLY_VISITORS: '1M+',
  SATISFACTION_RATE: '93%'
} as const;

export default function HeroSection() {
  const [formData, setFormData] = useState<QuoteFormData>({
    firstName: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Handle form submission here
      console.log('Form submitted:', formData);
      // TODO: Add actual form submission logic
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="background-container">
        <Image
          src="/hero-section-background.png"
          alt="FlorisGAS Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="background-overlay"></div>
      </div>

      <div className="content-container">
        <div className="main-content">
          
          <div className="social-proof-container">
            <div className="avatars-container">
              {CUSTOMER_AVATARS.map((avatar) => (
                <div
                  key={avatar.id}
                  className="avatar"
                  aria-label={avatar.alt}
                >
                  <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              ))}
            </div>
            <div className="social-proof-text">
              <span className="active-members">{STATS.ACTIVE_MEMBERS} Active Members</span>
              <br />
              <span className="service-text">Enjoy our facilities</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="heading-container">
            <h1 className="main-heading">
              Premium{' '}
              <span className="propane-text">Propane</span>{' '}
              <span className="service-text-heading">Service</span>{' '}
              That Puts Your Convenience First.
            </h1>
            
            <p className="sub-heading">
              We are a family-owned and operated company that has been serving the community for many years.
            </p>
          </div>

          {/* Quote Form */}
          <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
              <div className="input-container">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input"
                  
                />
                <input
                  type="phone"
                  name=""
                  placeholder="Enter Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input"
                  
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-button"
                >
                  {isSubmitting ? 'Submitting...' : 'Request A Quote →'}
                </button>
              </div>
            </form>
            
            <p className="disclaimer-text">
              By submitting your contact details, you agree to receive SMS/calls from FlorisGAS propane. Message & data rates may apply.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
