import { Suspense } from "react"
import ResultsPage from "@/components/ClientFindLocationResultsPage"
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
    title: "FloriGas Locations Near You | Propane Service Results",
    description:
      "View FloriGas propane service locations near your area. Find nearby propane stations, delivery services, and refill centers with addresses, hours, and contact information.",

    metadataBase: new URL("https://florigas.com"),
    openGraph: {
      images: [
        {
          url: "https://florigas.com/hero-section-background.png",
          width: 1200,
          height: 630,
          alt: "FloriGas Locations",
        },
      ],
      title: "FloriGas Locations Near You | Propane Service Results",
      description:
        "View FloriGas propane service locations near your area. Find nearby propane stations, delivery services, and refill centers with addresses, hours, and contact information.",
      type: "website",
      locale: "en_US",
      url: "https://florigas.com/find-location/results",
      siteName: "FloriGas",
    },

    twitter: {
      card: "summary_large_image",
      images: [
        {
          url: "https://florigas.com/hero-section-background.png",
          width: 1200,
          height: 630,
          alt: "FloriGas Locations",
        },
      ],
      title: "FloriGas Locations Near You | Propane Service Results",
      description:
        "View FloriGas propane service locations near your area. Find nearby propane stations, delivery services, and refill centers with addresses, hours, and contact information.",
      site: "@florigas",
      creator: "@florigas",
    },

    alternates: {
      canonical: "https://florigas.com/find-location/results",
    },

    robots: {
      index: false,
      follow: true,
    },

    keywords: [
      "propane locations",
      "FloriGas near me",
      "propane stations",
      "propane service locations",
      "find propane dealer",
      "propane locations Miami",
      "FloriGas near me Miami",
      "propane stations Miami",
      "propane service locations Miami",
      "find propane dealer Miami",
      "gas stations Miami",
      "propane stations near me Miami FL",
      "propane locations Texas",
      "FloriGas near me Texas",
      "propane stations Texas",
      "propane service locations Texas",
      "find propane dealer Texas",
      "gas stations Texas",
      "propane stations near me Dallas",
      "propane locations Georgia",
      "FloriGas near me Georgia",
      "propane stations Georgia",
      "propane service locations Georgia",
      "find propane dealer Georgia",
      "gas stations Georgia",
      "propane stations near me Atlanta",
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
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsPage />
    </Suspense>
  )
}
