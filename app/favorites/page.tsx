import type { Metadata } from 'next'
import { FavoritesContent } from '@/components/favorites-content'

export const metadata: Metadata = {
  title: 'Favoritos',
  description: 'Tus recursos favoritos guardados para acceso rapido.',
  alternates: {
    canonical: '/favorites',
  },
  // Personal user content - keep out of search index
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  openGraph: {
    title: 'Favoritos | elijs.dev',
    description: 'Tus recursos favoritos guardados para acceso rapido.',
    url: 'https://elijs.dev/favorites',
    images: [
      {
        url: '/programming.png',
        width: 1289,
        height: 599,
        alt: 'elijs.dev - Favoritos',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Favoritos | elijs.dev',
    description: 'Tus recursos favoritos guardados para acceso rapido.',
    images: ['/programming.png'],
  },
}

export default function FavoritesPage() {
  return <FavoritesContent />
}
