import { Geist_Mono } from "next/font/google";
import { gilroy } from "./fonts";
import "./globals.css";
import type { Metadata } from "next";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { url: "/icon.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/icon.svg", sizes: "48x48", type: "image/svg+xml" },
      { url: "/icon.svg", sizes: "64x64", type: "image/svg+xml" },
      { url: "/icon.svg", sizes: "128x128", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: [
      { url: "/icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={gilroy.variable}>
      <body className={`${geistMono.variable} font-gilroy antialiased`}>
        {children}
      </body>
    </html>
  );
}
