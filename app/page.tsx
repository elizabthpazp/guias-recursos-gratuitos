import type { Metadata } from 'next'
import { HomeContent } from '@/components/home-content'
import { getAllGuides, getTotalResources } from '@/lib/guides-data'

const SITE_URL = 'https://elijs.dev'

export const metadata: Metadata = {
  title: 'Guías y Recursos Gratuitos para Programadores',
  description:
    'Plataforma con Guías y recursos gratuitos para aprender a programar: juegos, cursos universitarios, React, APIs, optimizacion web, certificaciones y mas.',
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
    url: SITE_URL,
    title: 'elijs.dev | Guías y Recursos Gratuitos para Programadores',
    description:
      'Plataforma con Guías y recursos gratuitos para aprender a programar: juegos, cursos universitarios, React, APIs, optimizacion web, certificaciones y mas.',
    images: [
      {
        url: '/programming.png',
        width: 1289,
        height: 599,
        alt: 'elijs.dev - Guías y recursos gratuitos para programadores',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'elijs.dev | Guías y Recursos Gratuitos para Programadores',
    description:
      'Plataforma con Guías y recursos gratuitos para aprender a programar: juegos, cursos universitarios, React, APIs, optimizacion web, certificaciones y mas.',
    images: ['/programming.png'],
  },
}

export default function HomePage() {
  const guides = getAllGuides()
  const totalResources = guides.reduce((acc, g) => acc + getTotalResources(g), 0)

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Guías y Recursos Gratuitos para Programadores',
    description:
      'Coleccion curada de Guías y recursos gratuitos para aprender a programar en 2026.',
    url: SITE_URL,
    inLanguage: ['es-ES', 'en-US'],
    isPartOf: {
      '@type': 'WebSite',
      name: 'elijs.dev',
      url: SITE_URL,
    },
    hasPart: guides.map((guide) => ({
      '@type': 'CreativeWork',
      name: guide.id,
      url: `${SITE_URL}/guides/${guide.slug}`,
    })),
    numberOfItems: totalResources,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <HomeContent />
    </>
  )
}
