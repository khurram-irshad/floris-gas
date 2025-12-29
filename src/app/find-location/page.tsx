import FindLocationPage from "@/components/ClientFindLocationPage";
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
    title: "Find a FloriGas Location | Propane Service Near You",
    description:
      "Find your nearest FloriGas propane service location. Search by city, address, or ZIP code to locate delivery areas, refill stations, and service support near you.",

    metadataBase: new URL("https://florigas.us"),

    alternates: {
      canonical: "https://florigas.us/find-location",
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
      title: "Find a FloriGas Location | Propane Service Near You",
      description:
        "Search by city, address, or ZIP code to find FloriGas propane delivery areas, refill stations, and service support near you.",
      url: "https://florigas.us/find-location",
      siteName: "FloriGas",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "https://florigas.us/hero-section-background.png",
          width: 1200,
          height: 630,
          alt: "Find a FloriGas Location",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Find a FloriGas Location | Propane Service Near You",
      description:
        "Search by city, address, or ZIP code to find FloriGas propane delivery areas, refill stations, and service support near you.",
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
  return <FindLocationPage />;
}
