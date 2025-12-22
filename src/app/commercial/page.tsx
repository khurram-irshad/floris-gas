import CommercialPage from "@/components/ClientCommercialPage"
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
      "Commercial Propane Solutions | FloriGas - Reliable Business Propane Services",
    description:
      "Reliable commercial propane solutions tailored to keep your business running smoothly with efficiency and cost-effectiveness. FloriGas provides expert propane services for restaurants, hotels, manufacturing, agriculture, and more across Florida.",

    metadataBase: new URL("https://florigas.com"),
    openGraph: {
      images: [
        {
          url: "https://florigas.com/hero-section-background.png",
          width: 1200,
          height: 630,
          alt: "FloriGas Commercial Propane Solutions",
        },
      ],
      title:
        "Commercial Propane Solutions | FloriGas - Reliable Business Propane Services",
      description:
        "Reliable commercial propane solutions tailored to keep your business running smoothly with efficiency and cost-effectiveness. FloriGas provides expert propane services for restaurants, hotels, manufacturing, agriculture, and more across Florida.",
      type: "website",
      locale: "en_US",
      url: "https://florigas.com/commercial",
      siteName: "FloriGas",
    },

    twitter: {
      card: "summary_large_image",
      images: [
        {
          url: "https://florigas.com/hero-section-background.png",
          width: 1200,
          height: 630,
          alt: "FloriGas Commercial Propane Solutions",
        },
      ],
      title:
        "Commercial Propane Solutions | FloriGas - Reliable Business Propane Services",
      description:
        "Reliable commercial propane solutions tailored to keep your business running smoothly with efficiency and cost-effectiveness. FloriGas provides expert propane services for restaurants, hotels, manufacturing, agriculture, and more across Florida.",
      site: "@florigas",
      creator: "@florigas",
    },

    alternates: {
      canonical: "https://florigas.com/commercial",
    },

    robots: {
      index: true,
      follow: true,
    },

    keywords: [
      "commercial propane",
      "business propane",
      "propane for restaurants",
      "industrial propane",
      "propane for hotels",
      "manufacturing propane",
      "agriculture propane",
      "commercial propane delivery",
      "Florida commercial propane",
      "propane supplier for business",
      "FloriGas commercial",
      "commercial propane Miami",
      "business propane Miami",
      "propane for restaurants Miami",
      "Miami commercial propane",
      "propane delivery Miami business",
      "commercial gas Miami",
      "business gas Miami FL",
      "propane service Miami commercial",
      "Miami industrial propane",
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
  return <CommercialPage />
}
