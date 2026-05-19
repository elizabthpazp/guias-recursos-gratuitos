import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Providers } from './providers'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans',
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'elijs.dev | Recursos de Programacion',
  description: 'Guias gratuitas y recursos curados para aprender a programar. Desde juegos para aprender codigo hasta guias avanzadas de optimizacion web.',
  keywords: ['programacion', 'desarrollo web', 'recursos gratuitos', 'aprender a programar', 'frontend', 'backend', 'fullstack', 'react', 'javascript'],
  authors: [{ name: 'elijs.dev', url: 'https://www.elijs.dev/' }],
  creator: 'elijs.dev',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    url: 'https://elijs.dev',
    title: 'elijs.dev | Recursos de Programacion',
    description: 'Guias gratuitas y recursos curados para aprender a programar.',
    siteName: 'elijs.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'elijs.dev | Recursos de Programacion',
    description: 'Guias gratuitas y recursos curados para aprender a programar.',
    creator: '@elijsdev',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
        <Providers>
          {children}
        </Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
