import ResidentialPage from "@/components/ClientResidentialPage";
import type { Metadata, Viewport } from "next";

export function generateViewport(): Viewport {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  };
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Residential Propane Delivery | Home Propane Services | FloriGas",
    description:
      "Reliable residential propane delivery for homes. FloriGas provides safe, on-time propane services for heating, cooking, water heating, and everyday household needs.",

    metadataBase: new URL("https://florigas.us"),

    alternates: {
      canonical: "https://florigas.us/residential",
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      title: "Residential Propane Delivery | Home Propane Services | FloriGas",
      description:
        "Reliable residential propane delivery for homes. Heating, cooking, water heating, and more with safe, dependable service.",
      url: "https://florigas.us/residential",
      siteName: "FloriGas",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "https://florigas.us/hero-section-background.png",
          width: 1200,
          height: 630,
          alt: "FloriGas Residential Propane Services",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Residential Propane Delivery | Home Propane Services | FloriGas",
      description:
        "Safe, reliable residential propane delivery for heating, cooking, and household energy needs.",
      images: ["https://florigas.us/hero-section-background.png"],
      site: "@florigas",
      creator: "@florigas",
    },

    icons: {
      icon: [{ url: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
      shortcut: "/icon.svg",
      apple: [{ url: "/icon.svg", sizes: "180x180", type: "image/svg+xml" }],
    },

    other: {
      "X-UA-Compatible": "IE=edge",
    },
  };
}

export default function Page() {
  return <ResidentialPage />;
}
