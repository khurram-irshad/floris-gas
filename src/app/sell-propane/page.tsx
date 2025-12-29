import SellPropanePage from "@/components/ClientSellPropanePage";
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
    title: "Sell Propane | Partner With FloriGas",
    description:
      "Partner with FloriGas to sell propane and grow your business. We offer reliable supply, operational support, and flexible partnership opportunities for propane distributors and retailers.",

    metadataBase: new URL("https://florigas.us"),

    alternates: {
      canonical: "https://florigas.us/sell-propane",
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
      title: "Sell Propane | Partner With FloriGas",
      description:
        "Partner with FloriGas to sell propane and grow your business with reliable supply and trusted operational support.",
      url: "https://florigas.us/sell-propane",
      siteName: "FloriGas",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "https://florigas.us/hero-section-background.png",
          width: 1200,
          height: 630,
          alt: "FloriGas Propane Partnership Program",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Sell Propane | Partner With FloriGas",
      description:
        "Join FloriGas as a propane partner and grow your business with reliable supply and flexible opportunities.",
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
  return <SellPropanePage />;
}
