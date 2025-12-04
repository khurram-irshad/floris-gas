/**
 * Case Studies Page
 * 
 * This page showcases FloriGAS's success stories and case studies to demonstrate
 * the company's expertise in propane services and partnership opportunities.
 * 
 * Domain Context:
 * FloriGAS is a full-service propane supplier in Florida, providing:
 * - Residential propane delivery and services
 * - Commercial propane solutions for businesses
 * - Partnership opportunities for hardware stores, gas stations, and distributors
 * - Reliable propane supply with expert customer service
 * 
 * The case studies page serves to:
 * 1. Build trust by showcasing real customer success stories
 * 2. Demonstrate the company's experience and track record
 * 3. Encourage potential partners to join the FloriGAS network
 * 4. Provide social proof through testimonials and statistics
 */

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
