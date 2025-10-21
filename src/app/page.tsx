import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import HeroVideoOverlay from '@/components/sections/HeroVideoOverlay';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import PartnersSection from '@/components/sections/PartnersSection';
import FAQSection from '@/components/sections/FAQSection';
import LocationSection from '@/components/sections/LocationSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CallToActionSection from '@/components/sections/CallToActionSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <div style={{ position: 'relative' }}>
          <HeroSection />
          <HeroVideoOverlay />
        </div>
        <ServicesSection />
        <StatsSection />
        <FeaturesSection />
        <PartnersSection />
        <FAQSection />
        <LocationSection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
