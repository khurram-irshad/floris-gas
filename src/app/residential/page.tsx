import ResidentialPage from "@/components/ClientResidentialPage"
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
    title:
      "Residential Propane Delivery | FloriGas - Home Propane Services in Florida",
    description:
      "Convenient, on-time residential propane delivery to power your home with comfort and reliability. FloriGas provides expert residential propane services including heating, cooking, water heating, and more for Florida homeowners.",

    metadataBase: new URL("https://florigas.com"),
    openGraph: {
      images: [
        {
          url: "https://florigas.com/hero-section-background.png",
          width: 1200,
          height: 630,
          alt: "FloriGas Residential Propane Services",
        },
      ],
      title:
        "Residential Propane Delivery | FloriGas - Home Propane Services in Florida",
      description:
        "Convenient, on-time residential propane delivery to power your home with comfort and reliability. FloriGas provides expert residential propane services including heating, cooking, water heating, and more for Florida homeowners.",
      type: "website",
      locale: "en_US",
      url: "https://florigas.com/residential",
      siteName: "FloriGas",
    },

    twitter: {
      card: "summary_large_image",
      images: [
        {
          url: "https://florigas.com/hero-section-background.png",
          width: 1200,
          height: 630,
          alt: "FloriGas Residential Propane Services",
        },
      ],
      title:
        "Residential Propane Delivery | FloriGas - Home Propane Services in Florida",
      description:
        "Convenient, on-time residential propane delivery to power your home with comfort and reliability. FloriGas provides expert residential propane services including heating, cooking, water heating, and more for Florida homeowners.",
      site: "@florigas",
      creator: "@florigas",
    },

    alternates: {
      canonical: "https://florigas.com/residential",
    },

    robots: {
      index: true,
      follow: true,
    },

    keywords: [
      "residential propane",
      "home propane delivery",
      "propane for home",
      "residential propane service",
      "home heating propane",
      "propane delivery Florida",
      "residential propane tank",
      "home propane refill",
      "Florida residential propane",
      "propane for homeowners",
      "FloriGas residential",
      "residential propane Miami",
      "home propane delivery Miami",
      "propane for home Miami",
      "Miami residential propane",
      "propane delivery Miami residential",
      "residential gas Miami",
      "home gas Miami FL",
      "propane service Miami residential",
      "Miami home propane",
      "residential propane Texas",
      "home propane delivery Texas",
      "propane for home Texas",
      "Texas residential propane",
      "propane delivery Texas residential",
      "residential gas Texas",
      "home gas Texas",
      "propane service Texas residential",
      "Dallas home propane",
      "residential propane Georgia",
      "home propane delivery Georgia",
      "propane for home Georgia",
      "Georgia residential propane",
      "propane delivery Georgia residential",
      "residential gas Georgia",
      "home gas Georgia",
      "propane service Georgia residential",
      "Atlanta home propane",
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
  return <ResidentialPage />
}
