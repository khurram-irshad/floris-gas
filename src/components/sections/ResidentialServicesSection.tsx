"use client"

import Image from "next/image"
import "./ResidentialServicesSection.css"

const servicesData = [
  {
    id: 1,
    subtitle: "Indoor",
    title: "Safe, Affordable, and Convenient Propane Services for Families.",
    description:
      "Reliable heating solutions, and cooking appliances to enhance your home comfort.",
    image: "/indoor.png",
    buttonText: "Services",
    buttonColor: "blue",
  },
  {
    id: 2,
    subtitle: "Outdoor",
    title: "Transform Your Outdoor Living Space with Propane Solutions.",
    description:
      "From grills to patio heaters, we make your outdoor experience enjoyable year-round.",
    image: "/outdoor.png",
    buttonText: "Outdoor",
    buttonColor: "blue",
  },
  {
    id: 3,
    subtitle: "Backup",
    title: "Dependable Backup Generators for Peace of Mind During Outages.",
    description:
      "Keep your generator's fuel topped off to ensure your home stays powered, no matter the weather",
    image: "/backup.png",
    buttonText: "Backup",
    buttonColor: "blue",
  },
]

export default function ResidentialServicesSection() {
  return (
    <section className="residential-services-section">
      <div className="residential-services-container">
        {/* Header */}
        <div className="residential-services-header">
          <h2 className="residential-services-title">
            Comprehensive Propane Solutions for Every Aspect of Your Home.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="residential-services-grid">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="residential-service-card"
            >
              <div className="residential-service-image-container">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="residential-service-image"
                />
              </div>
              <div className="residential-service-content">
                <span className="residential-service-subtitle">
                  {service.subtitle}
                </span>
                <h3 className="residential-service-title">{service.title}</h3>
                <p className="residential-service-description">
                  {service.description}
                </p>
                {/* <button className={`residential-service-button ${service.buttonColor}`}>
                  {service.buttonText}
                  <Image src="/card-arrow.png" alt="Arrow" width={12} height={12} />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
