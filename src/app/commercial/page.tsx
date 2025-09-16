import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CommercialHeroSection from '../../components/sections/CommercialHeroSection';
import CommercialPropaneSolutions from '@/components/sections/CommercialPropaneSolutions';
import IndustriesWeServe from '@/components/sections/IndustriesWeServe';
import BusinessBenefits from '@/components/sections/BusinessBenefits';
import ReadyToExperience from '@/components/sections/ReadyToExperience';
import CaseStudy from '@/components/sections/CaseStudy';
import PowerYourBusinessCTA from '@/components/sections/PowerYourBusinessCTA';
import ResidentialFAQSection from '@/components/sections/ResidentialFAQSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CallToActionSection from '@/components/sections/CallToActionSection';

export default function CommercialPage() {
  return (
    <>
      <Navigation />
      <main>
        <CommercialHeroSection />
        <CommercialPropaneSolutions />
        <IndustriesWeServe />
        <BusinessBenefits />
        <ReadyToExperience />
        <CaseStudy />
        <ResidentialFAQSection />
        <PowerYourBusinessCTA />
        <TestimonialsSection />
        <CallToActionSection />   
      </main>
      <Footer />
    </>
  );
}
