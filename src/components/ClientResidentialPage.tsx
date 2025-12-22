"use client"

import Navigation from "@/components/layout/Navigation"
import Footer from "@/components/layout/Footer"
import ResidentialHeroSection from "@/components/sections/ResidentialHeroSection"
import PropaneSolutionsSection from "@/components/sections/PropaneSolutionsSection"
import WhatWeOffer from "@/components/sections/WhatWeOffer"
import KeyFeaturesSection from "@/components/sections/KeyFeaturesSection"
import ResidentialServicesSection from "@/components/sections/ResidentialServicesSection"
import PropaneBenefitsSection from "@/components/sections/PropaneBenefitsSection"
import ProcessStepsSection from "@/components/sections/ProcessStepsSection"
import ResidentialFAQSection from "@/components/sections/ResidentialFAQSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import CallToActionSection from "@/components/sections/CallToActionSection"

export default function ResidentialPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <ResidentialHeroSection />
        <PropaneSolutionsSection />
        <WhatWeOffer />
        <KeyFeaturesSection />
        <ResidentialServicesSection />
        <PropaneBenefitsSection />
        <ProcessStepsSection />
        <ResidentialFAQSection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  )
}

