'use client';

import Image from 'next/image';
import './PropanePartsEquipment.css';

export default function PropanePartsEquipment() {
  const equipmentItems = [
    {
      id: 1,
      image: '/propane-e-1.png',
      alt: 'Propane Equipment 1'
    },
    {
      id: 2,
      image: '/propane-e-4.png', 
      alt: 'Propane Equipment 2'
    },
    {
      id: 3,
      image: '/propane-e-3.png', 
      alt: 'Propane Equipment 3'
    },
    {
      id: 4,
      image: '/propane-e-2.png', 
      alt: 'Propane Equipment 4'
    }
  ];

  return (
    <section className="propane-parts-equipment-section">
      <div className="propane-parts-equipment-container">
        {/* Header */}
        <div className="propane-parts-equipment-header">
          <h2 className="propane-parts-equipment-title">
            Propane Parts and Equipment
          </h2>
          <p className="propane-parts-equipment-description">
            We&apos;re committed to providing safe and reliable propane service throughout Florida,
            with quality equipment and professional support you can trust.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="propane-parts-equipment-grid">
          {equipmentItems.map((item) => (
            <div key={item.id} className="equipment-card">
              <div className="equipment-image-container">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={103}
                  height={144}
                  className="equipment-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
