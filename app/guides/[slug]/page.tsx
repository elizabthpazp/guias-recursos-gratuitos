import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getGuideBySlug, getAllGuides, getTotalResources } from '@/lib/guides-data'
import { GuideContent } from '@/components/guide-content'
import { translations } from '@/lib/i18n'

const SITE_URL = 'https://elijs.dev'

// Generate static params for all guides
export function generateStaticParams() {
  const guides = getAllGuides()
  return guides.map((guide) => ({
    slug: guide.slug,
  }))
}

// Generate metadata for each guide
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuideBySlug(slug)

  if (!guide) {
    return {
      title: 'Guia no encontrada',
      description: 'La guia que buscas no existe.',
      robots: { index: false, follow: false },
    }
  }

  const esMeta = translations.es.guides[slug as keyof typeof translations.es.guides]
  const enMeta = translations.en.guides[slug as keyof typeof translations.en.guides]

  const title = esMeta?.title ?? slug
  const description = esMeta?.description ?? 'Guia de recursos gratuitos para programadores.'
  const canonical = `/guides/${slug}`

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        'es-ES': canonical,
        'en-US': canonical,
        'x-default': canonical,
      },
    },
    openGraph: {
      type: 'article',
      url: `${SITE_URL}${canonical}`,
      title: `${title} | elijs.dev`,
      description,
      siteName: 'elijs.dev',
      locale: 'es_ES',
      alternateLocale: ['en_US'],
      images: [
        {
          url: '/programming.png',
          width: 1289,
          height: 599,
          alt: enMeta?.title ?? title,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | elijs.dev`,
      description,
      images: ['/programming.png'],
    },
  }
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)

  if (!guide) {
    notFound()
  }

  const esMeta = translations.es.guides[slug as keyof typeof translations.es.guides]
  const total = getTotalResources(guide)
  const url = `${SITE_URL}/guides/${slug}`

  // Article + ItemList structured data
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: esMeta?.title ?? slug,
    description: esMeta?.description,
    inLanguage: 'es-ES',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    image: [`${SITE_URL}/programming.png`],
    author: {
      '@type': 'Person',
      name: 'elijs.dev',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: 'elijs.dev',
      url: SITE_URL,
    },
  }

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: esMeta?.title ?? slug,
    numberOfItems: total,
    itemListElement: guide.sections.flatMap((section, sIdx) =>
      section.resources.map((resource, rIdx) => ({
        '@type': 'ListItem',
        position: sIdx * 100 + rIdx + 1,
        name: resource.name,
        description: resource.description,
        url: resource.url,
      })),
    ),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: esMeta?.title ?? slug,
        item: url,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <GuideContent guide={guide} />
    </>
  )
}
