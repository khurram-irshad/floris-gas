import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CaseStudiesHeroSection from '../../components/sections/CaseStudiesHeroSection';
import CaseStudiesStatsSection from '@/components/sections/CaseStudiesStatsSection';
import ThreeDecadesSection from '@/components/sections/ThreeDecadesSection';
import OceanviewCaseStudy from '@/components/sections/OceanviewCaseStudy';
import SuccessStoriesGrid from '@/components/sections/SuccessStoriesGrid';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import ResidentialFAQSection from '@/components/sections/ResidentialFAQSection';
import NextSuccessStoryCTA from '@/components/sections/NextSuccessStoryCTA';

// NOTE: This page is temporarily disabled but code is preserved for future use
export default function CaseStudiesPage() {
  // Return null to disable the page while keeping all code intact
  return null;
  
  /* COMMENTED OUT - Can be uncommented in the future if needed
  return (
    <>
      <Navigation />
      <main>
        <CaseStudiesHeroSection />
        <CaseStudiesStatsSection />
        <ThreeDecadesSection />
        <OceanviewCaseStudy />
        <SuccessStoriesGrid />
        <ResidentialFAQSection/>
        <NextSuccessStoryCTA />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </>
  );
  */
}
