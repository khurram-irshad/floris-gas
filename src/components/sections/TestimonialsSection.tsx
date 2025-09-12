'use client';

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
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Don't take our word for it. Hear from our partners.
          </h2>
        </div>
        
        <div className="testimonials-grid">
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
        </div>
      </div>
    </section>
  );
}
