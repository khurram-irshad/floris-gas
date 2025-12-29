import CommercialPage from "@/components/ClientCommercialPage";
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
    title: "Commercial Propane Delivery in Florida | FloriGas",
    description:
      "Commercial propane delivery and service across Florida for restaurants, hotels, facilities, and industrial operations. Reliable supply, safety-first service, and responsive customer support.",

    metadataBase: new URL("https://florigas.us"),

    alternates: {
      canonical: "https://florigas.us/commercial",
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
      title: "Commercial Propane Delivery in Florida | FloriGas",
      description:
        "Commercial propane delivery and service across Florida for restaurants, hotels, facilities, and industrial operations.",
      url: "https://florigas.us/commercial",
      siteName: "FloriGas",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "https://florigas.us/hero-section-background.png",
          width: 1200,
          height: 630,
          alt: "FloriGas Commercial Propane Service",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Commercial Propane Delivery in Florida | FloriGas",
      description:
        "Commercial propane delivery and service across Florida for restaurants, hotels, facilities, and industrial operations.",
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
  return <CommercialPage />;
}
