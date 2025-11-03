'use client';

import Image from 'next/image';
import './HowItWorks.css';
import { useRouter } from 'next/navigation';

const processSteps = [
  {
    id: 1,
    stepNumber: 'Step 1:',
    title: 'Apply Online',
    description: 'Complete our simple online application with your business details and goals. We&apos;ll review and respond within 48 hours.',
    icon: '/faster.png' // You can replace with specific icons
  },
  {
    id: 2,
    stepNumber: 'Step 2:',
    title: 'Setup & Training',
    description: 'Our team provides complete setup including tank displays, safety training, and business integration support.',
    icon: '/faster.png' // You can replace with specific icons
  },
  {
    id: 3,
    stepNumber: 'Step 3:',
    title: 'Start Selling',
    description: 'Begin selling with ongoing supply deliveries, marketing support, and dedicated account management to grow your business.',
    icon: '/faster.png' // You can replace with specific icons
  }
];

export default function HowItWorks() {
  const router = useRouter();
  const handleRequestQuote = () => {
    router.push('/contact');
  };

  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <p className="how-it-works-subtitle">Process</p>
          <h2 className="how-it-works-title">
            How It Works
          </h2>
          <p className="how-it-works-description">
            Getting started as a FloriGAS partner is simple and straightforward. We<br />
            guide you through every step of the process.
          </p>
        </div>

        <div className="how-it-works-process-steps-grid">
          {processSteps.map((step) => (
            <div key={step.id} className="process-step-item">
              <div className="step-icon-container">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={48}
                  height={48}
                  className="step-icon"
                />
              </div>
              
              <div className="step-content">
                <div className="step-number">{step.stepNumber}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="how-it-works-note">
          <p className="process-note">
            The application process takes less than 10 minutes, and we&apos;ll have you selling propane in no time.
          </p>
        </div>

        <div className="how-it-works-action">
          <button 
            onClick={handleRequestQuote}
            className="how-it-works-button"
          >
            Request A Quote →
          </button>
        </div>
      </div>
    </section>
  );
}
