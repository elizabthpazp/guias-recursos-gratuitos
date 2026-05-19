import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Providers } from './providers'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const SITE_URL = 'https://elijs.dev'
const SITE_NAME = 'elijs.dev'
const DEFAULT_TITLE = 'elijs.dev | Guías y Recursos Gratuitos para Programadores'
const DEFAULT_DESCRIPTION =
  'Guías y recursos gratuitos para aprender a programar en 2026: desde juegos para aprender codigo hasta optimizacion web, React, APIs y mas.'
const OG_IMAGE = {
  url: '/programming.png',
  width: 1289,
  height: 599,
  alt: 'elijs.dev - Guías y recursos gratuitos para programadores',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark light',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | elijs.dev',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: 'Next.js',
  keywords: [
    'programacion',
    'desarrollo web',
    'recursos gratuitos',
    'aprender a programar',
    'frontend',
    'backend',
    'fullstack',
    'react',
    'javascript',
    'typescript',
    'Guías de programacion',
    'cursos gratuitos',
    'web development',
    'free resources',
    'learn to code',
  ],
  authors: [{ name: 'elijs.dev', url: SITE_URL }],
  creator: 'elijs.dev',
  publisher: 'elijs.dev',
  category: 'technology',
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/',
      'en-US': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE.url,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt: OG_IMAGE.alt,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    creator: '@elijsdev',
    site: '@elijsdev',
    images: [
      {
        url: OG_IMAGE.url,
        alt: OG_IMAGE.alt,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/fav.png', media: '(prefers-color-scheme: light)' },
      { url: '/fav.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/fav.png',
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  inLanguage: ['es-ES', 'en-US'],
  publisher: {
    '@type': 'Person',
    name: 'elijs.dev',
    url: SITE_URL,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geist.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          // Structured data improves how search engines display the site
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
