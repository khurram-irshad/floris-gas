"use client"

import Image from "next/image"
import "./PropaneBenefitsSection.css"

const benefits = [
  {
    id: 1,
    icon: "/safety-first.jpg",
    title: "Safety First",
    description: "Rigorously tested to ensure safety for your family and home.",
  },
  {
    id: 2,
    icon: "/affordable-energy.jpg",
    title: "Affordable Energy",
    description:
      "Enjoy competitive pricing and save on your energy bills with propane.",
  },
]

export default function PropaneBenefitsSection() {
  return (
    <section className="propane-benefits-section">
      <div className="propane-benefits-container">
        <div className="propane-benefits-content">
          <div className="propane-benefits-left">
            <h2 className="propane-benefits-title">
              Discover the Top Benefits of Choosing Propane for Your Home.
            </h2>
            <p className="propane-benefits-description">
              Propane is a safe, reliable, and cost-effective energy source for
              your home. Experience the convenience and efficiency it brings to
              your daily life.
            </p>

            <div className="propane-benefits-list">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="propane-benefit-item"
                >
                  <div className="propane-benefit-icon">
                    <Image
                      src={benefit.icon}
                      alt={benefit.title}
                      width={48}
                      height={48}
                      className="benefit-icon-image"
                    />
                  </div>
                  <div className="propane-benefit-content">
                    <h3 className="propane-benefit-title">{benefit.title}</h3>
                    <p className="propane-benefit-description">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="propane-benefits-right">
            <div className="propane-benefits-image-container">
              <Image
                src="/faq-background.jpg"
                alt="Propane Benefits - Forklift and Propane Tanks"
                fill
                className="propane-benefits-main-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
