import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import HeroVideoOverlay from '@/components/sections/HeroVideoOverlay';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import WhatWeOffer from '@/components/sections/WhatWeOffer';
// import PartnersSection from '@/components/sections/PartnersSection';
import FAQSection from '@/components/sections/FAQSection';
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
        <WhatWeOffer />
        {/* <PartnersSection /> */}
        <FAQSection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
