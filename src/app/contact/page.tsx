import ContactPage from "@/components/ClientContactPage"
import type { Metadata, Viewport } from "next"

export function generateViewport(): Viewport {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata: Metadata = {
    title: "Contact FloriGas | Get in Touch - Propane Service in Florida",
    description:
      "Contact FloriGas for all your propane needs. Get in touch with our team for quotes, service inquiries, or questions about our residential and commercial propane services in Florida. We're here to help!",

    metadataBase: new URL("https://florigas.com"),
    openGraph: {
      images: [
        {
          url: "https://florigas.com/hero-section-background.png",
          width: 1200,
          height: 630,
          alt: "Contact FloriGas",
        },
      ],
      title: "Contact FloriGas | Get in Touch - Propane Service in Florida",
      description:
        "Contact FloriGas for all your propane needs. Get in touch with our team for quotes, service inquiries, or questions about our residential and commercial propane services in Florida. We're here to help!",
      type: "website",
      locale: "en_US",
      url: "https://florigas.com/contact",
      siteName: "FloriGas",
    },

    twitter: {
      card: "summary_large_image",
      images: [
        {
          url: "https://florigas.com/hero-section-background.png",
          width: 1200,
          height: 630,
          alt: "Contact FloriGas",
        },
      ],
      title: "Contact FloriGas | Get in Touch - Propane Service in Florida",
      description:
        "Contact FloriGas for all your propane needs. Get in touch with our team for quotes, service inquiries, or questions about our residential and commercial propane services in Florida. We're here to help!",
      site: "@florigas",
      creator: "@florigas",
    },

    alternates: {
      canonical: "https://florigas.com/contact",
    },

    robots: {
      index: true,
      follow: true,
    },

    keywords: [
      "contact FloriGas",
      "propane service contact",
      "FloriGas phone number",
      "propane quote request",
      "Florida propane contact",
      "propane service inquiry",
      "FloriGas customer service",
      "propane delivery contact",
      "contact FloriGas Miami",
      "propane service contact Miami",
      "FloriGas phone number Miami",
      "propane quote request Miami",
      "Miami propane contact",
      "propane service inquiry Miami",
      "FloriGas customer service Miami",
      "propane delivery contact Miami FL",
      "contact FloriGas Texas",
      "propane service contact Texas",
      "FloriGas phone number Texas",
      "propane quote request Texas",
      "Texas propane contact",
      "propane service inquiry Texas",
      "FloriGas customer service Texas",
      "propane delivery contact Texas",
      "contact FloriGas Georgia",
      "propane service contact Georgia",
      "FloriGas phone number Georgia",
      "propane quote request Georgia",
      "Georgia propane contact",
      "propane service inquiry Georgia",
      "FloriGas customer service Georgia",
      "propane delivery contact Georgia",
      "miami gas",
    ],
    icons: {
      icon: [
        { url: "/icon.svg", sizes: "any", type: "image/svg+xml" },
        { url: "/icon.svg", sizes: "32x32", type: "image/svg+xml" },
        { url: "/icon.svg", sizes: "48x48", type: "image/svg+xml" },
        { url: "/icon.svg", sizes: "64x64", type: "image/svg+xml" },
        { url: "/icon.svg", sizes: "128x128", type: "image/svg+xml" },
      ],
      shortcut: "/icon.svg",
      apple: [{ url: "/icon.svg", sizes: "180x180", type: "image/svg+xml" }],
    },
    other: {
      "X-UA-Compatible": "IE=edge",
    },
  }

  return metadata
}

export default async function Page() {
  return <ContactPage />
}
