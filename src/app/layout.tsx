import { Geist_Mono } from 'next/font/google'
import { gilroy } from './fonts'
import './globals.css'
import type { Metadata, Viewport } from 'next'

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export function generateViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata: Metadata = {
    title:
      'FloriGas | Premium Propane Service That Puts Your Convenience First',
    description:
      "At FloriGas Inc, we're your trusted full-service propane supplier in Florida — delivering expert service, reliable supply, and customer care built on respect, trust, and integrity. Family-owned and operated, serving residential and commercial customers with premium propane solutions.",

    metadataBase: new URL('https://florigas.com'),
    openGraph: {
      images: [
        {
          url: 'https://florigas.com/hero-section-background.png',
          width: 1200,
          height: 630,
          alt: 'FloriGas Premium Propane Service',
        },
      ],
      title:
        'FloriGas | Premium Propane Service That Puts Your Convenience First',
      description:
        "At FloriGas Inc, we're your trusted full-service propane supplier in Florida — delivering expert service, reliable supply, and customer care built on respect, trust, and integrity. Family-owned and operated, serving residential and commercial customers with premium propane solutions.",
      type: 'website',
      locale: 'en_US',
      url: 'https://florigas.com',
      siteName: 'FloriGas',
    },

    twitter: {
      card: 'summary_large_image',
      images: [
        {
          url: 'https://florigas.com/hero-section-background.png',
          width: 1200,
          height: 630,
          alt: 'FloriGas Premium Propane Service',
        },
      ],
      title:
        'FloriGas | Premium Propane Service That Puts Your Convenience First',
      description:
        "At FloriGas Inc, we're your trusted full-service propane supplier in Florida — delivering expert service, reliable supply, and customer care built on respect, trust, and integrity. Family-owned and operated, serving residential and commercial customers with premium propane solutions.",
      site: '@florigas',
      creator: '@florigas',
    },

    alternates: {
      canonical: 'https://florigas.com/',
    },

    robots: {
      index: true,
      follow: true,
    },

    keywords: [
      'FloriGas',
      'FloriGas Inc',
      'propane',
      'propane delivery',
      'propane service',
      'Florida propane',
      'residential propane',
      'commercial propane',
      'propane supplier',
      'propane delivery Florida',
      'family owned propane',
      'propane solutions',
      'propane tank',
      'propane refill',
      'trusted propane supplier',
      'gas in Miami',
      'propane in Miami',
      'propane delivery Miami',
      'Miami propane service',
      'propane Miami FL',
      'gas Miami Florida',
      'propane supplier Miami',
      'Miami propane delivery',
      'propane service Miami',
      'Florida gas service',
      'propane Florida',
      'gas in Texas',
      'propane in Texas',
      'propane delivery Texas',
      'Texas propane service',
      'propane Texas',
      'gas Texas',
      'propane supplier Texas',
      'propane delivery Dallas',
      'propane Houston',
      'gas in Georgia',
      'propane in Georgia',
      'propane delivery Georgia',
      'Georgia propane service',
      'propane Georgia',
      'gas Georgia',
      'propane supplier Georgia',
      'propane delivery Atlanta',
      'propane Savannah',
    ],
    icons: {
      icon: [
        { url: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
        { url: '/icon.svg', sizes: '32x32', type: 'image/svg+xml' },
        { url: '/icon.svg', sizes: '48x48', type: 'image/svg+xml' },
        { url: '/icon.svg', sizes: '64x64', type: 'image/svg+xml' },
        { url: '/icon.svg', sizes: '128x128', type: 'image/svg+xml' },
      ],
      shortcut: '/icon.svg',
      apple: [{ url: '/icon.svg', sizes: '180x180', type: 'image/svg+xml' }],
    },
    other: {
      'X-UA-Compatible': 'IE=edge',
    },
  }

  return metadata
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={gilroy.variable}>
      <body className={`${geistMono.variable} font-gilroy antialiased`}>
        {children}
      </body>
    </html>
  )
}
