import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'

import { config } from 'global-config'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Providers } from './providers'

import '@/styles/main.css'

export const metadata: Metadata = {
  ...config.metadata,
  metadataBase: new URL(config.webserver.host),
  title: {
    default: config.metadata.title,
    template: `%s • ${config.metadata.title}`
  },
  applicationName: config.metadata.title,
  authors: [{ name: 'Levy Buildz', url: 'https://github.com/levybuildz' }],
  category: 'Personal Website',
  keywords: [
    'personal',
    'development',
    'wellness',
    'mindfulness',
    'finance',
    'web3',
    'lifestyle',
    'blog',
    'homepage',
    'portfolio',
    'about',
    'me',
    'tech',
    'programming',
    'knowledge'
  ],
  robots: {
    follow: true,
    index: true
  },
  openGraph: {
    ...config.metadata,
    type: 'website',
    url: '/',
    emails: ['contact@levybuildz.com', 'levybuildz@pm.me']
  },
  twitter: {
    ...config.metadata,
    card: 'summary_large_image'
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#060606' },
    { media: '(prefers-color-scheme: light)', color: '#fafafa' }
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '900'],
  variable: '--font-inter',
  display: 'swap'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id={process.env.UMAMI_WEBSITE_ID}
        />
      </head>
      <body className={`scroll-smooth ${inter.variable}`}>
        <Providers>
          <Header />
          <div>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
