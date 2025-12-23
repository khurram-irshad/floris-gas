import FindLocationPage from "@/components/ClientFindLocationPage"
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
      "Find FloriGas Location | Locate Propane Service Near You in Florida",
    description:
      "Find your nearest FloriGas propane service location. Search by city, address, or zip code to locate propane delivery, refill stations, and service centers near you in Florida.",

    metadataBase: new URL("https://florigas.com"),
    openGraph: {
      images: [
        {
          url: "https://florigas.com/hero-section-background.png",
          width: 1200,
          height: 630,
          alt: "Find FloriGas Location",
        },
      ],
      title:
        "Find FloriGas Location | Locate Propane Service Near You in Florida",
      description:
        "Find your nearest FloriGas propane service location. Search by city, address, or zip code to locate propane delivery, refill stations, and service centers near you in Florida.",
      type: "website",
      locale: "en_US",
      url: "https://florigas.com/find-location",
      siteName: "FloriGas",
    },

    twitter: {
      card: "summary_large_image",
      images: [
        {
          url: "https://florigas.com/hero-section-background.png",
          width: 1200,
          height: 630,
          alt: "Find FloriGas Location",
        },
      ],
      title:
        "Find FloriGas Location | Locate Propane Service Near You in Florida",
      description:
        "Find your nearest FloriGas propane service location. Search by city, address, or zip code to locate propane delivery, refill stations, and service centers near you in Florida.",
      site: "@florigas",
      creator: "@florigas",
    },

    alternates: {
      canonical: "https://florigas.com/find-location",
    },

    robots: {
      index: true,
      follow: true,
    },

    keywords: [
      "find propane location",
      "FloriGas locations",
      "propane near me",
      "propane service locations",
      "propane stations Florida",
      "find propane dealer",
      "propane delivery locations",
      "FloriGas service centers",
      "find propane location Miami",
      "FloriGas locations Miami",
      "propane near me Miami",
      "propane service locations Miami",
      "propane stations Miami FL",
      "find propane dealer Miami",
      "propane delivery locations Miami",
      "FloriGas service centers Miami",
      "gas stations Miami",
      "propane stations near me Miami",
      "find propane location Texas",
      "FloriGas locations Texas",
      "propane near me Texas",
      "propane service locations Texas",
      "propane stations Texas",
      "find propane dealer Texas",
      "propane delivery locations Texas",
      "FloriGas service centers Texas",
      "gas stations Texas",
      "propane stations near me Dallas",
      "find propane location Georgia",
      "FloriGas locations Georgia",
      "propane near me Georgia",
      "propane service locations Georgia",
      "propane stations Georgia",
      "find propane dealer Georgia",
      "propane delivery locations Georgia",
      "FloriGas service centers Georgia",
      "gas stations Georgia",
      "propane stations near me Atlanta",
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
  return <FindLocationPage />
}
