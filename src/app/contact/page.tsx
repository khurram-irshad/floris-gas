import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import ContactHeroSection from '../../components/sections/ContactHeroSection';
import ContactSection from '@/components/sections/ContactSection';
import CallToActionBanner from '@/components/sections/CallToActionBanner';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <ContactHeroSection />
        <ContactSection />
        <CallToActionBanner />
        <TestimonialsSection/>
        {/* Additional sections can be added here later */}
      </main>
      <Footer />
    </div>
  );
}
