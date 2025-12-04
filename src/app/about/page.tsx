/**
 * About Page
 * 
 * This page tells the story of FloriGAS, providing visitors with comprehensive
 * information about the company's history, mission, values, and leadership.
 * 
 * Domain Context:
 * FloriGAS Inc. is a family-owned and operated propane supplier serving Florida.
 * The company provides:
 * - Full-service propane delivery and supply
 * - Residential and commercial propane solutions
 * - Partnership opportunities for distributors
 * - Expert customer service built on trust, respect, and integrity
 * 
 * The about page serves to:
 * 1. Establish credibility and trust through company history
 * 2. Communicate the company's mission, vision, and core values
 * 3. Humanize the brand by introducing leadership team
 * 4. Showcase company achievements and statistics
 * 5. Build emotional connection with potential customers/partners
 */

import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import AboutHeroSection from '@/components/sections/AboutHeroSection';
import CaseStudiesStatsSection from '@/components/sections/CaseStudiesStatsSection';
import AboutContentSection from '@/components/sections/AboutContentSection';
import OurSuccessStorySection from '@/components/sections/OurSuccessStorySection';
import WhatDriveUsSection from '@/components/sections/WhatDriveUsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import OurVisionSection from '@/components/sections/OurVisionSection';
import OurValuesSection from '@/components/sections/OurValuesSection';
import MeetOurLeadershipSection from '@/components/sections/MeetOurLeadershipSection';
import CallToActionSection from '@/components/sections/CallToActionSection';

// NOTE: This page is temporarily disabled but code is preserved for future use
export default function AboutPage() {
  // Return null to disable the page while keeping all code intact
  return null;
  
  /* COMMENTED OUT - Can be uncommented in the future if needed
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <AboutHeroSection />
        <CaseStudiesStatsSection />
        <AboutContentSection />
        <OurSuccessStorySection />
        <WhatDriveUsSection />
        <OurVisionSection />
        <OurValuesSection />
        <MeetOurLeadershipSection/>
        <TestimonialsSection />
        <CallToActionSection/>
      </main>
      <Footer />
    </div>
  );
  */
}
