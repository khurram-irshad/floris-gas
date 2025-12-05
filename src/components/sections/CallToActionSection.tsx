'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './CallToActionSection.css';

export default function CallToActionSection() {
  const router = useRouter();
  
  const handleFindLocation = () => {
    router.push('/find-location');
  };

  const handleCall = () => {
    // Handle call logic
    window.open('tel:1-800-FLORIGAS', '_self');
  };

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">
            Don&apos;t wait until you&apos;re empty. Find your nearest location now and experience the FloriGas difference.
          </h2>
          
          <div className="cta-buttons">
            <button onClick={handleFindLocation} className="cta-button cta-primary">
              <Image
                src="/location-01.svg"
                alt="Location"
                width={16}
                height={16}
                className="button-icon"
              />
              FIND LOCATION NOW
            </button>
            
            <span className="cta-divider">or call</span>
            
            <button onClick={handleCall} className="cta-button cta-secondary">
              1-800-FLORIGAS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
