'use client';

import { useState } from 'react';
import Image from 'next/image';
import './FAQSection.css';

const faqData = [
  {
    id: 1,
    question: 'What residential propane services does Florigas offer?',
    answer: 'We provide comprehensive residential propane services including tank installation, regular delivery schedules, emergency refills, leak detection, safety inspections, and 24/7 customer support for all your home propane needs.'
  },
  {
    id: 2,
    question: 'How can I get started with Florigas?',
    answer: 'Request a FREE quote today to explore our competitive pricing and superior service offerings.',
  },
  {
    id: 3,
    question: 'How can I benefit from Florigas\' residential propane service?',
    answer: 'Our residential propane service offers reliable energy for heating, cooking, and hot water. You\'ll enjoy consistent supply, competitive pricing, professional installation, regular maintenance, and peace of mind with our safety-first approach.'
  },
  {
    id: 4,
    question: 'What commercial propane services does Florigas offer?',
    answer: 'We provide tailored commercial solutions including bulk propane delivery, fleet fueling, forklift services, construction site supply, restaurant and hospitality services, and industrial applications with flexible delivery schedules.'
  },
  {
    id: 5,
    question: 'How can I sell propane at my location with Florigas?',
    answer: 'Partner with us to become an authorized Florigas retailer. We provide training, marketing support, competitive wholesale pricing, reliable supply chain, and ongoing business development assistance to help grow your propane sales.'
  },
  {
    id: 6,
    question: 'How can I contact Florigas for queries?',
    answer: 'You can reach us through multiple channels: call our customer service line, visit our website contact form, email us directly, or visit any of our local service centers. We\'re available 24/7 for emergency services.'
  },
  {
    id: 7,
    question: 'What residential propane services does Florigas offer?',
    answer: 'We provide comprehensive residential propane services including tank installation, regular delivery schedules, emergency refills, leak detection, safety inspections, and 24/7 customer support for all your home propane needs.'
  }
];

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(2);

  const toggleItem = (id: number) => {
    setOpenItem(prev => prev === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="faq-background-container">
        <Image
          src="/faq.jpg"
          alt="FAQ Background"
          fill
          className="faq-background-image"
          priority
        />
        <div className="faq-overlay"></div>
        <div className="faq-bottom-blur"></div>
      </div>
      
      <div className="faq-container">
        <div className="faq-content">
          {/* Left Content */}
          <div className="faq-left">
            <h2 className="faq-title">Frequently Asked Questions:</h2>
            <p className="faq-description">
              Find answers to the most common questions about Florigas, including features, pricing, and how to get started.
            </p>
          </div>

          {/* Right Content - FAQ List */}
          <div className="faq-right">
            <div className="faq-list">
              {faqData.map((faq) => (
                <div 
                  key={faq.id} 
                  className={`faq-item ${openItem === faq.id ? 'open' : ''}`}
                >
                  <button 
                    className="faq-question"
                    onClick={() => toggleItem(faq.id)}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <span className="faq-icon">
                      <Image
                        src={openItem === faq.id ? "/faq-up-arrow.png" : "/faq-down-arrow.png"}
                        alt={openItem === faq.id ? "Collapse" : "Expand"}
                        width={16}
                        height={16}
                        className="faq-arrow-icon"
                      />
                    </span>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
