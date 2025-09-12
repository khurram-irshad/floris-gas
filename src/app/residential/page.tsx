import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ResidentialHeroSection from '@/components/sections/ResidentialHeroSection';
import PropaneSolutionsSection from '@/components/sections/PropaneSolutionsSection';
import KeyFeaturesSection from '@/components/sections/KeyFeaturesSection';
import ResidentialServicesSection from '@/components/sections/ResidentialServicesSection';
import PropaneBenefitsSection from '@/components/sections/PropaneBenefitsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import LocationSection from '@/components/sections/LocationSection';

export default function ResidentialPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <ResidentialHeroSection />
        <PropaneSolutionsSection />
        <KeyFeaturesSection />
        <ResidentialServicesSection />
        <PropaneBenefitsSection />
        <LocationSection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
