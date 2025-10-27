'use client';

import { useState } from 'react';
import Image from 'next/image';
import './SuccessStoriesGrid.css';

const successStories = [
  {
    id: 1,
    category: 'residential',
    badge: 'Residential',
    title: 'Florida Family Estate',
    description: 'Complete propane solution for 8,000 sq ft home with pool heating, outdoor kitchen, and backup generator.',
    benefits: [
      '50% heating cost reduction',
      '24/7 reliable backup power',
      'Enhanced outdoor living'
    ],
    image: '/florida-family-estate.jpg',
    link: '#'
  },
  {
    id: 2,
    category: 'commercial',
    badge: 'Commercial',
    title: 'Coastal Seafood Restaurant Chain',
    description: 'Bulk propane supply solution for 12-location restaurant chain specializing in fresh seafood.',
    benefits: [
      '35% cost savings across locations',
      '99% delivery reliability',
      '12 locations standardized'
    ],
    image: '/sea-food-resturant.jpg',
    link: '#'
  },
  {
    id: 3,
    category: 'partners',
    badge: 'Partners',
    title: 'Gulf Coast Hardware Network',
    description: 'Partnership opportunity enabling 3 hardware stores to sell propane and generate additional revenue.',
    benefits: [
      '40% revenue increase',
      '98% customer satisfaction',
      '3 store network'
    ],
    image: '/gulf-coast.jpg',
    link: '#'
  },
  {
    id: 4,
    category: 'residential',
    badge: 'Residential',
    title: 'Lakefront Community Development',
    description: 'Comprehensive propane infrastructure for 150+ homes in luxury lakefront community.',
    benefits: [
      '150 homes served',
      'Community-wide savings',
      'Enhanced property values'
    ],
    image: '/lake-front.jpg',
    link: '#'
  },
  {
    id: 5,
    category: 'commercial',
    badge: 'Commercial',
    title: 'Agricultural Processing Facility',
    description: 'Large-scale propane solution for food processing plant with 24/7 operations requirements.',
    benefits: [
      'Zero downtime achieved',
      '30% efficiency improvement',
      '24/7 reliable supply'
    ],
    image: '/agriculture.jpg',
    link: '#'
  },
  {
    id: 6,
    category: 'partners',
    badge: 'Partners',
    title: 'Marina & Marine Supply Stores',
    description: 'Partnership with 4 marina locations to provide propane services for boaters and marine customers.',
    benefits: [
      '4 marina partnerships',
      '25% partner revenue boost',
      'Marine market expansion'
    ],
    image: '/marina.jpg',
    link: '#'
  }
];

const filterOptions = [
  { id: 'all', label: 'All Stories', count: 6 },
  { id: 'residential', label: 'Residential', count: 2 },
  { id: 'commercial', label: 'Commercial', count: 2 },
  { id: 'partners', label: 'Partners', count: 2 }
];

export default function SuccessStoriesGrid() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleStories, setVisibleStories] = useState(6);

  const filteredStories = activeFilter === 'all' 
    ? successStories 
    : successStories.filter(story => story.category === activeFilter);

  const displayedStories = filteredStories.slice(0, visibleStories);

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setVisibleStories(6); // Reset visible stories when filter changes
  };

  const handleLoadMore = () => {
    setVisibleStories(prev => prev + 3);
  };

  const handleReadFullStory = (storyId: number) => {
    console.log(`Read full story clicked for story ${storyId}`);
  };

  return (
    <section className="success-stories-grid-section">
      <div className="success-stories-grid-container">
        <div className="success-stories-grid-header">
          <h2 className="success-stories-grid-title">Success Stories Across Florida</h2>
          <p className="success-stories-grid-description">
            Discover how FloriGAS has helped customers across residential, commercial, and 
            partnership sectors achieve their goals with reliable propane solutions.
          </p>
        </div>

        <div className="success-stories-filter-buttons">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleFilterChange(option.id)}
              className={`success-stories-filter-button ${activeFilter === option.id ? 'active' : ''}`}
            >
              {option.label} ({option.count})
            </button>
          ))}
        </div>

        <div className="success-stories-grid">
          {displayedStories.map((story) => (
            <div key={story.id} className="success-story-card">
              <div className="success-story-image-container">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="success-story-image"
                />
                <div className="success-story-badge"><span className="gradient-text">{story.badge}</span></div>
              </div>
              
              <div className="success-story-content">
                <h3 className="success-story-title">{story.title}</h3>
                <p className="success-story-description">{story.description}</p>
                
                <div className="success-story-benefits">
                  {story.benefits.map((benefit, index) => (
                    <div key={index} className="success-story-benefit">
                      <div className="success-story-checkmark">
                        <Image
                          src="/checkmark-badge.png"
                          alt="Checkmark"
                          width={16}
                          height={16}
                          className="checkmark-icon"
                        />
                      </div>
                      <span className="success-story-benefit-text">{benefit}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => handleReadFullStory(story.id)}
                  className="success-story-read-more"
                >
                  Read Full Story
                  <Image
                    src="/card-arrow.png"
                    alt="Arrow"
                    width={12}
                    height={12}
                    className="success-story-arrow"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredStories.length > visibleStories && (
          <div className="success-stories-load-more">
            <button 
              onClick={handleLoadMore}
              className="success-stories-load-more-button"
            >
              Load More Case Studies
            </button>
          </div>
        )}
      </div>
           <div className="success-stories-load-more-button-container">
                    <button 
                      // onClick={handleReadMoreCaseStudies}
                      className="success-stories-load-more-button"
                    >
                      Load More Case Studies
                    </button>
            </div>
    </section>
  );
}
