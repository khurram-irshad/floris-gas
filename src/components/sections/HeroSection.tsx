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
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    // Basic validation
    if (!formData.firstName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setSubmitMessage({
        type: 'error',
        text: 'Please fill in all fields.'
      });
      setIsSubmitting(false);
      return;
    }
    
    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage({
          type: 'success',
          text: 'Quote request sent successfully! We\'ll contact you soon.'
        });
        // Reset form
        setFormData({
          firstName: '',
          email: '',
          phone: '',
        });
      } else {
        setSubmitMessage({
          type: 'error',
          text: data.error || 'Failed to send quote request. Please try again.'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage({
        type: 'error',
        text: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePlayVideo = () => {
    setIsVideoModalOpen(true);
  };

  const handleCloseVideoModal = () => {
    setIsVideoModalOpen(false);
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
          
          {/* <div className="social-proof-container">
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
              <span className="active-members">{STATS.ACTIVE_MEMBERS} <span className="active-members-text"> Active Members</span></span>
              <br />
              <span className="service-text">Enjoy our facilities</span>
            </div>
          </div> */}

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
                  placeholder="Enter Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input"
                  required
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
            
            {/* Success/Error Message */}
            {submitMessage && (
              <div 
                className={`message ${submitMessage.type === 'success' ? 'message-success' : 'message-error'}`}
                style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  marginTop: '16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  backgroundColor: submitMessage.type === 'success' ? '#d4edda' : '#f8d7da',
                  color: submitMessage.type === 'success' ? '#155724' : '#721c24',
                  border: `1px solid ${submitMessage.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                }}
              >
                {submitMessage.text}
              </div>
            )}
            
            <p className="disclaimer-text">
              By submitting your contact details, you agree to receive SMS/calls from FlorisGAS propane. Message & data rates may apply.
            </p>
          </div>

          {/* Mobile Video Button */}
          <div className="mobile-video-button-container">
            <button 
              onClick={handlePlayVideo}
              className="mobile-video-button"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none"
                className="mobile-play-icon"
              >
                <circle cx="12" cy="12" r="12" fill="white" />
                <path 
                  d="M10 8L16 12L10 16V8Z" 
                  fill="#4168FC"
                />
              </svg>
              Play Our Vision
            </button>
          </div>
        </div>
    
      </div>

      {/* Video Modal for Mobile */}
      {isVideoModalOpen && (
        <div className="video-modal-overlay" onClick={handleCloseVideoModal}>
          <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
            <button 
              className="video-modal-close"
              onClick={handleCloseVideoModal}
              aria-label="Close video"
            >
              ×
            </button>
            <div className="video-modal-content">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Fp6kDEAEz9I?autoplay=1"
                title="What we do - FloriGAS"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-modal-iframe"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
