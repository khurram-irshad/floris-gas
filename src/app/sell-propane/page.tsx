import SellPropanePage from "@/components/ClientSellPropanePage"
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
      "Sell Propane | Partner with FloriGas - Propane Distribution Opportunities",
    description:
      "Partner with FloriGas to sell propane and grow your business with reliable supply, trusted support, and flexible partnership opportunities. Join our network of propane distributors and retailers across Florida.",

    metadataBase: new URL("https://florigas.com"),
    openGraph: {
      images: [
        {
          url: "https://florigas.com/hero-section-background.png",
          width: 1200,
          height: 630,
          alt: "FloriGas Propane Partnership Program",
        },
      ],
      title:
        "Sell Propane | Partner with FloriGas - Propane Distribution Opportunities",
      description:
        "Partner with FloriGas to sell propane and grow your business with reliable supply, trusted support, and flexible partnership opportunities. Join our network of propane distributors and retailers across Florida.",
      type: "website",
      locale: "en_US",
      url: "https://florigas.com/sell-propane",
      siteName: "FloriGas",
    },

    twitter: {
      card: "summary_large_image",
      images: [
        {
          url: "https://florigas.com/hero-section-background.png",
          width: 1200,
          height: 630,
          alt: "FloriGas Propane Partnership Program",
        },
      ],
      title:
        "Sell Propane | Partner with FloriGas - Propane Distribution Opportunities",
      description:
        "Partner with FloriGas to sell propane and grow your business with reliable supply, trusted support, and flexible partnership opportunities. Join our network of propane distributors and retailers across Florida.",
      site: "@florigas",
      creator: "@florigas",
    },

    alternates: {
      canonical: "https://florigas.com/sell-propane",
    },

    robots: {
      index: true,
      follow: true,
    },

    keywords: [
      "sell propane",
      "propane distributor",
      "propane partnership",
      "propane retailer",
      "propane distribution",
      "become propane dealer",
      "propane business opportunity",
      "propane wholesale",
      "propane reseller",
      "FloriGas partnership",
      "propane dealer program",
      "sell propane Miami",
      "propane distributor Miami",
      "propane partnership Miami",
      "Miami propane retailer",
      "propane distribution Miami",
      "become propane dealer Miami",
      "propane business opportunity Miami",
      "Miami propane wholesale",
      "propane reseller Miami FL",
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
  return <SellPropanePage />
}
