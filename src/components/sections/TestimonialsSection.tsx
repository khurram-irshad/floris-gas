'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import './TestimonialsSection.css';

const testimonials = [
  {
    id: 1,
    text: "Their keep-full program means I never worry about running out of propane during our family BBQs. The drivers are professional and always explain everything clearly.",
    author: "Mike Rodriguez",
    location: "Winter Park, FL",
    avatar: "/avatar-1.jpg"
  },
  {
    id: 2,
    text: "Outstanding service! Their keep-full program means I never worry about running out of propane during our family BBQs. The drivers are professional and always explain everything clearly.",
    author: "Mike Rodriguez",
    location: "Winter Park, FL",
    avatar: "/avatar-1.jpg"
  },
  {
    id: 3,
    text: "The drivers are professional and always explain everything clearly. Outstanding service!",
    author: "Mike Rodriguez",
    location: "Winter Park, FL",
    avatar: "/avatar-1.jpg"
  }
];

export default function TestimonialsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Check if we're on mobile
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) return;

    let scrollPosition = 0;
    const scrollStep = 1;
      const scrollDelay = 20;
    let isUserInteracting = false;

    const autoScroll = () => {
      if (!slider || isUserInteracting) return;
      
      scrollPosition += scrollStep;
      
      // Reset to beginning when we reach the end
      if (scrollPosition >= slider.scrollWidth - slider.clientWidth) {
        scrollPosition = 0;
      }
      
      slider.scrollTo({
        left: scrollPosition,
        behavior: 'auto'
      });
    };

    const intervalId = setInterval(autoScroll, scrollDelay);

    // Handle user interaction
    const handleTouchStart = () => {
      isUserInteracting = true;
    };

    const handleTouchEnd = () => {
      // Resume auto-scroll after 4 seconds of no interaction
      setTimeout(() => {
        isUserInteracting = false;
      }, 3000);
    };

    const handleScroll = () => {
      isUserInteracting = true;
      setTimeout(() => {
        isUserInteracting = false;
      }, 2000);
    };

    slider.addEventListener('touchstart', handleTouchStart, { passive: true });
    slider.addEventListener('touchend', handleTouchEnd, { passive: true });
    slider.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      clearInterval(intervalId);
      if (slider) {
        slider.removeEventListener('touchstart', handleTouchStart);
        slider.removeEventListener('touchend', handleTouchEnd);
        slider.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Don&apos;t take our word for it. Hear from our partners.
          </h2>
        </div>
        
        <div className="testimonials-grid" ref={sliderRef}>
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`testimonial-card ${index === 0 ? 'first-card' : ''}`}>
              <div className="testimonial-quote-icon">
                <span className="quote-mark">❝</span>
              </div>
              
              <p className="testimonial-text">
                {testimonial.text}
              </p>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="avatar-image"
                  />
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.author}</h4>
                  <p className="author-location">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate testimonials for seamless loop on mobile */}
          {testimonials.map((testimonial, index) => (
            <div key={`duplicate-${testimonial.id}`} className={`testimonial-card mobile-duplicate ${index === 0 ? 'first-card' : ''}`}>
              <div className="testimonial-quote-icon">
                <span className="quote-mark">❝</span>
              </div>
              
              <p className="testimonial-text">
                {testimonial.text}
              </p>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="avatar-image"
                  />
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.author}</h4>
                  <p className="author-location">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
