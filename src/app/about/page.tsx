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
