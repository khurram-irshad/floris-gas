'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './OurSuccessStorySection.css';

const timelineData = [
  {
    id: 1,
    year: '1995',
    icon: '/Frame-icon-6.svg',
    title: 'FloriGAS Founded',
    shortDescription: 'From one truck to serving Central Florida.',
    fullDescription: 'Started as a small family business with a single delivery truck, focused on providing reliable propane services to Central Florida communities.',
    image: '/Frame-1.jpg'
  },
  {
    id: 2,
    year: '2001',
    icon: '/Frame-icon-1.svg',
    title: 'First Major Expansion',
    shortDescription: 'Expanded operations across Florida.',
    fullDescription: 'Opened multiple distribution centers and expanded our delivery network to serve residential and commercial customers throughout the state.',
    image: '/Frame-2.jpg'
  },
  {
    id: 3,
    year: '2008',
    icon: '/Frame-icon-2.svg',
    title: '24/7 Emergency Service',
    shortDescription: 'Launched round-the-clock emergency support.',
    fullDescription: 'Introduced 24/7 emergency service to ensure our customers never face propane shortages during critical times, setting new industry standards.',
    image: '/Frame-3.jpg'
  },
  {
    id: 4,
    year: '2010',
    icon: '/Frame-icon-3.svg',
    title: 'Technology Integration',
    shortDescription: 'Implemented advanced tracking systems.',
    fullDescription: 'Introduced GPS tracking and automated scheduling systems to improve delivery efficiency and customer service.',
    image: '/Frame-4.jpg'
  },
  {
    id: 5,
    year: '2020',
    icon: '/Frame-icon-4.svg',
    title: 'Sustainability Initiative',
    shortDescription: 'Launched eco-friendly propane solutions.',
    fullDescription: 'Pioneered clean-burning propane technologies and sustainable delivery practices to reduce environmental impact.',
    image: '/Frame-5.jpg'
  },
  {
    id: 6,
    year: '2024',
    icon: '/Frame-icon-5.svg',
    title: 'Digital Transformation',
    shortDescription: 'Launched mobile app and online services.',
    fullDescription: 'Developed comprehensive digital platform allowing customers to schedule deliveries, monitor usage, and manage accounts online.',
    image: '/Frame-6.jpg'
  }
];

export default function OurSuccessStorySection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;

  return (
    <section className="success-story-section">
      <div className="success-story-container">
        {/* Header */}
        <div className="success-story-header">
          <h2 className="success-story-title">Our Success Story</h2>
          <p className="success-story-description">
            At Florigas Inc, we're your trusted full-service propane supplier in Florida. Backed by years<br />
            of expertise, we deliver reliable service with integrity, respect, and dedication.
          </p>
        </div>

        {/* Swiper Timeline Cards */}
        <div className="timeline-container">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              // Calculate logical slide position for dots
              const realIndex = swiper.realIndex;
              const logicalSlide = Math.floor(realIndex / 2);
              setActiveSlide(logicalSlide % totalSlides);
            }}
            spaceBetween={16}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            centeredSlides={false}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                slidesPerGroup: 1,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 2.5,
                slidesPerGroup: 2,
                centeredSlides: false,
              },
            }}
            modules={[Navigation, Pagination]}
            className="timeline-swiper"
          >
            {timelineData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="timeline-card">
                  <div className="timeline-card-image">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="timeline-image"
                    />
                    <div className="timeline-overlay">
                      <div className="timeline-year-section">
                        <div className="timeline-icon-container">
                          <Image
                            src={item.icon}
                            alt="Icon"
                            width={16}
                            height={16}
                            className="timeline-icon"
                          />
                        </div>
                        <div className="timeline-year-badge">
                          <span className="timeline-year">{item.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover content overlay on image */}
                  <div className="timeline-hover-overlay">
                    <div className="timeline-hover-text">
                      <h3 className="timeline-hover-title">{item.title}</h3>
                      <p className="timeline-hover-desc">{item.shortDescription}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Navigation */}
        <div className="timeline-navigation">
          <div className="nav-controls-left">
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="nav-button prev-button"
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="nav-button next-button"
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="nav-controls-right">
            <div className="pagination-dots">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const targetSlide = index * 2; // Each dot represents 2 slides
                    swiperRef.current?.slideToLoop(targetSlide);
                  }}
                  className={`dot ${index === activeSlide ? 'active' : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}