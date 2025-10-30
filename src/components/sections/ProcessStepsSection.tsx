'use client';

import Image from 'next/image';
import './ProcessStepsSection.css';

const steps = [
  {
    id: 1,
    stepNumber: "Step 1:",
    title: "Schedule Your Propane Delivery",
    description: "Choose a convenient time for our team to deliver.",
    icon: "/s-schedule.jpg"
  },
  {
    id: 2,
    stepNumber: "Step 2:",
    title: "Reliable Delivery to Your Home",
    description: "Our experienced drivers will ensure safe delivery.",
    icon: "/s-reliable.jpg"
  },
  {
    id: 3,
    stepNumber: "Step 3:",
    title: "Enjoy Comfort and Peace of Mind",
    description: "Relax and enjoy the warmth of propane in your home.",
    icon: "/s-enjoy.jpg"
  }
];

export default function ProcessStepsSection() {
  const handleRequestQuote = () => {
    // Handle request quote logic
    console.log('Request quote clicked');
  };

  const handleLearnMore = () => {
    // Handle learn more logic
    console.log('Learn more clicked');
  };

  return (
    <section className="process-steps-section">
      <div className="process-steps-container">
        <div className="process-steps-header">
          <p className="process-steps-subtitle">Process</p>
          <h2 className="process-steps-title">
            Simple Steps to Enjoy Your Propane Service
          </h2>
          <p className="process-steps-description">
            Getting started with our propane service is easy. Follow these three simple steps to ensure your home is comfortable and efficient.
          </p>
        </div>

        <div className="process-steps-grid">
          {steps.map((step) => (
            <div key={step.id} className="process-step-card">
              <div className="process-step-icon">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={48}
                  height={48}
                  className="step-icon-image"
                />
              </div>
              
              <div className="process-step-content">
                <p className="process-step-number">{step.stepNumber}</p>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="process-steps-buttons">
          <button onClick={handleRequestQuote} className="process-steps-button primary">
            Request A Quote →
          </button>
          <button onClick={handleLearnMore} className="process-steps-button secondary">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
