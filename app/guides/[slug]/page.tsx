import { notFound } from 'next/navigation'
import { getGuideBySlug, getAllGuides } from '@/lib/guides-data'
import { GuideContent } from '@/components/guide-content'

// Generate static params for all guides
export function generateStaticParams() {
  const guides = getAllGuides()
  return guides.map((guide) => ({
    slug: guide.slug,
  }))
}

// Generate metadata for each guide
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  
  if (!guide) {
    return {
      title: 'Guide Not Found | elijs.dev',
    }
  }

  // Use Spanish title for metadata since it's the primary language
  const titles: Record<string, string> = {
    'learn-programming-games': 'Aprende a Programar Jugando',
    'improve-programming-2026': 'Guia para Mejorar en Programacion en 2026',
    'free-resources-2026': 'Recursos Gratuitos para Programar en 2026',
    'frontend-react-project': 'Proyecto Frontend con React',
    'web-optimization': 'Optimizacion Web y Rendimiento',
  }

  const descriptions: Record<string, string> = {
    'learn-programming-games': 'Plataformas para dominar lenguajes de programacion mientras te diviertes superando retos y niveles.',
    'improve-programming-2026': 'Tu valor ya no reside en recordar la sintaxis, sino en tu capacidad para disenar soluciones.',
    'free-resources-2026': 'Recopilacion de plataformas y cursos especificos para convertirte en desarrollador.',
    'frontend-react-project': 'Recursos de aprendizaje para construir un proyecto frontend en React.',
    'web-optimization': 'Guia completa para optimizar la experiencia del usuario y el SEO de tu sitio web.',
  }

  return {
    title: `${titles[slug] || slug} | elijs.dev`,
    description: descriptions[slug] || 'Guia de recursos para programadores.',
    openGraph: {
      title: `${titles[slug] || slug} | elijs.dev`,
      description: descriptions[slug] || 'Guia de recursos para programadores.',
    },
  }
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)

  if (!guide) {
    notFound()
  }

  return <GuideContent guide={guide} />
}
