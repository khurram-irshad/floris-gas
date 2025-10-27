import { Geist_Mono } from "next/font/google";
import { gilroy } from "./fonts";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
