'use client';

import Image from 'next/image';
import './IndustriesWeServe.css';

const industriesData = [
  {
    id: 1,
    category: "Restaurants & Food Service",
    title: "High-performance propane solutions for commercial kitchens, grilling, and cooking operations with consistent heat and reliability.",
    image: "/C-kitchen.jpg",
    features: [
      "Commercial kitchen equipment",
      "Outdoor grilling stations", 
      "Food truck operations",
      "Catering services"
    ]
  },
  {
    id: 2,
    category: "Agriculture & Farming",
    title: "Power your agricultural operations with clean-burning propane for crop drying, irrigation, greenhouse heating, and equipment.",
    image: "/c-farmer.jpg",
    features: [
      "Crop drying systems",
      "Greenhouse heating",
      "Irrigation pumps",
      "Agricultural equipment"
    ]
  },
  {
    id: 3,
    category: "Construction & Warehousing",
    title: "Reliable propane for construction sites, warehouse heating, forklifts, and heavy equipment operations.",
    image: "/c-construction.jpg",
    features: [
      "Forklift operations",
      "Site heating",
      "Construction equipment",
      "Warehouse operations"
    ]
  },
  {
    id: 4,
    category: "Hospitality, Hotels, Resorts",
    title: "Create exceptional guest experiences with propane for pool heating, outdoor kitchens, fire features, and backup power.",
    image: "/c-hotel.png",
    features: [
      "Pool & spa heating",
      "Outdoor dining areas",
      "Fire pits & features",
      "Backup generators"
    ]
  }
];

export default function IndustriesWeServe() {
  const handleViewMore = (category: string) => {
    console.log(`View more for ${category}`);
  };

  return (
    <section className="industries-section">
      <div className="industries-container">
        <div className="industries-header">
          <p className="industries-subtitle">Industries We Serve</p>
          <h2 className="industries-title">
            Specialized propane solutions tailored to meet the needs of various industries across Florida.
          </h2>
        </div>

        <div className="industries-grid">
          {industriesData.map((industry) => (
            <div key={industry.id} className="industry-card">
              <div className="industry-image-container">
                <Image
                  src={industry.image}
                  alt={industry.category}
                  fill
                  className="industry-image"
                />
              </div>
              
              <div className="industry-content">
                <div className="industry-category">{industry.category}</div>
                <p className="industry-description">{industry.title}</p>
                
                <div className="industry-features">
                  {industry.features.map((feature, index) => (
                    <div key={index} className="industry-feature">
                      <Image
                        src="/checkmark-badge.png"
                        alt="Checkmark"
                        width={24}
                        height={24}
                        className="feature-checkmark"
                      />
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => handleViewMore(industry.category)}
                  className="industry-view-more-btn blue"
                >
                  View More
                  <Image
                    src="/card-arrow.png"
                    alt="Arrow"
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
