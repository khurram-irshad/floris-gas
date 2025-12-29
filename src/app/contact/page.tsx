import ContactPage from "@/components/ClientContactPage";
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
    title: "Contact FloriGas | Propane Service & Delivery",
    description:
      "Contact FloriGas for propane delivery, service inquiries, or partnership questions. Our team supports residential and commercial propane customers across Florida, Texas, and Georgia.",

    metadataBase: new URL("https://florigas.us"),

    alternates: {
      canonical: "https://florigas.us/contact",
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
      title: "Contact FloriGas | Propane Service & Delivery",
      description:
        "Get in touch with FloriGas for propane delivery, service inquiries, or partnership opportunities.",
      url: "https://florigas.us/contact",
      siteName: "FloriGas",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "https://florigas.us/hero-section-background.png",
          width: 1200,
          height: 630,
          alt: "Contact FloriGas Propane Services",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Contact FloriGas | Propane Service & Delivery",
      description:
        "Contact FloriGas for propane delivery, service inquiries, or partnership opportunities.",
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
  return <ContactPage />;
}
