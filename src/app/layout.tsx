import { Geist_Mono } from "next/font/google";
import { gilroy } from "./fonts";
import "./globals.css";
import type { Metadata, Viewport } from "next";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateViewport(): Viewport {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  };
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "FloriGas | Premium Propane Service That Puts Your Convenience First",
    description:
      "FloriGas is a trusted full-service propane supplier delivering reliable propane solutions for residential and commercial customers with a focus on safety, service, and integrity.",

    metadataBase: new URL("https://florigas.us"),

    alternates: {
      canonical: "https://florigas.us/",
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
      title: "FloriGas | Premium Propane Service",
      description:
        "Reliable propane services for residential and commercial customers, delivered with care, trust, and expertise.",
      url: "https://florigas.us",
      siteName: "FloriGas",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "https://florigas.us/hero-section-background.png",
          width: 1200,
          height: 630,
          alt: "FloriGas Premium Propane Service",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "FloriGas | Premium Propane Service",
      description:
        "Reliable propane services for homes and businesses, delivered with care and integrity.",
      images: ["https://florigas.us/hero-section-background.png"],
      site: "@florigas",
      creator: "@florigas",
    },

    icons: {
      icon: [{ url: "/favicon.png", sizes: "128x128", type: "image/png" }],
      shortcut: "/favicon.png",
      apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    },

    verification: {
      google: "KMxzNVGPQBhBLB8c-yfhAthc5U9GV_ZfnfVCp7s4uCo",
    },

    other: {
      "X-UA-Compatible": "IE=edge",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={gilroy.variable}>
      <body className={`${geistMono.variable} font-gilroy antialiased`}>
        {children}
      </body>
    </html>
  );
}
