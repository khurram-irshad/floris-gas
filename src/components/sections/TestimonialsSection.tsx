'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './TestimonialsSection.css';

const testimonials = [
  {
    id: 1,
    text: "Wow my first time using this company and they went above and beyond for me on Saturday thank you jerelyn for your service and excellent customer service.",
    author: "Oscar Zegarra",
    location: "Miami, Florida, USA",
    avatar: "/oscar.jpg"
  },
  {
    id: 2,
    text: "Wonderful company. Excellent customer service. I switched companies about 6 months ago and I am extremely satisfied. Special thank you to Jerelyn. She was extremely helpful.",
    author: "Melinda Shaffer",
    location: "Miami, Florida, USA",
    avatar: "/melinda.jpg"
  },
  {
    id: 3,
    text: "The service to our home was excellent. We purchased a brand new tank and we also purchased gas. The person who handled my account at FloriGas, Laisu was courteous and helpful. The installer waited until everything was in order. Thank you FloriGas.",
    author: "Guy Sperduto",
    location: "Miami, Florida, USA",
    avatar: "/guy.jpg"
  }
];

export default function TestimonialsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Only run auto-scroll on mobile
    if (!isMobile) return;

    let scrollPosition = 0;
    const scrollStep = 1;
      const scrollDelay = 10;
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
  }, [isMobile]);

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
          {isMobile && testimonials.map((testimonial, index) => (
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
