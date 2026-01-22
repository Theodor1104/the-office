import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = 'https://theofficeee.netlify.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'The Office | Coworking & Podcast Studio i Frederiksberg',
    template: '%s | The Office Frederiksberg',
  },
  description: 'Professionelt coworking space og podcast studie i hjertet af Frederiksberg. Book mødelokale, podcast-rum eller lej kontorplads. 2 min fra Frederiksberg Metro.',
  keywords: ['coworking Frederiksberg', 'kontorplads København', 'podcast studie leje', 'mødelokale Frederiksberg', 'coworking space København', 'lej podcast studie', 'kontorfællesskab Frederiksberg', 'book mødelokale København'],
  authors: [{ name: 'The Office Frederiksberg' }],
  creator: 'The Office',
  publisher: 'The Office',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: siteUrl,
    siteName: 'The Office Frederiksberg',
    title: 'The Office | Coworking & Podcast Studio i Frederiksberg',
    description: 'Professionelt coworking space og podcast studie i hjertet af Frederiksberg. Book mødelokale eller lej kontorplads. 2 min fra metroen.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Office - Coworking & Podcast Studio Frederiksberg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Office | Coworking & Podcast Studio Frederiksberg',
    description: 'Professionelt coworking space og podcast studie i Frederiksberg. Book mødelokale eller lej kontorplads.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'din-google-verification-kode', // Tilføj din Google Search Console verification kode
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="da">
      <head>
        <StructuredData />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
