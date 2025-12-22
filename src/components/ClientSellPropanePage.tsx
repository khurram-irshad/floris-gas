"use client"

import Navigation from "@/components/layout/Navigation"
import Footer from "@/components/layout/Footer"
import SellPropane from "@/components/sections/SellPropane"
import WhyPartnerWithFloriGAS from "@/components/sections/WhyPartnerWithFloriGAS"
import WhatYouGetAsPartner from "@/components/sections/WhatYouGetAsPartner"
import PartnerBenefits from "@/components/sections/PartnerBenefits"
import HowItWorks from "@/components/sections/HowItWorks"
// import ReadyToStartEarning from '@/components/sections/ReadyToStartEarning';
import ResidentialFAQSection from "@/components/sections/ResidentialFAQSection"
import ReadyToSellPropaneCTA from "@/components/sections/ReadyToSellPropaneCTA"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import CallToActionSection from "@/components/sections/CallToActionSection"

export default function SellPropanePage() {
  return (
    <>
      <Navigation />
      <main>
        <SellPropane />
        <WhyPartnerWithFloriGAS />
        {/* <ReadyToStartEarning /> */}
        <HowItWorks />
        <PartnerBenefits />
        <WhatYouGetAsPartner />
        <ResidentialFAQSection />
        <ReadyToSellPropaneCTA />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </>
  )
}

