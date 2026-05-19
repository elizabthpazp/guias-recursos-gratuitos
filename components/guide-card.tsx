'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'
import { type Guide, getTotalResources } from '@/lib/guides-data'
import { cn } from '@/lib/utils'

const guideKeywords: Record<string, { es: string; en: string }> = {
  'learn-programming-games': { es: 'Programar Jugando', en: 'Learn by Playing' },
  'improve-programming-2026': { es: 'Programación', en: 'Programming' },
  'free-resources-2026': { es: 'Programador', en: 'Developer' },
  'frontend-react-project': { es: 'React', en: 'React' },
  'web-optimization': { es: 'Rendimiento Web', en: 'Web Performance' },
  'portfolio-resources': { es: 'Portafolio', en: 'Portfolio' },
  'cv-portfolio-github': { es: 'Repos', en: 'Repos' },
  'certifications-cv': { es: 'Certificaciones', en: 'Certifications' },
  'api-real-world': { es: 'API', en: 'API' },
}

interface GuideCardProps {
  guide: Guide
  index: number
}

export function GuideCard({ guide, index }: GuideCardProps) {
  const { locale, t } = useLocale()
  const guideTranslation = t.guides[guide.slug as keyof typeof t.guides]
  const totalResources = getTotalResources(guide)
  const keyword = guideKeywords[guide.slug]?.[locale] || ''

  if (!guideTranslation) return null

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={`/guides/${guide.slug}`}
        className={cn(
          'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-200',
          'hover:border-terminal-green hover:bg-card/80',
        )}
      >
      {/* Header with icon and index */}
      <div className="mb-3 flex items-start justify-between">
        <div className="text-3xl">{guide.icon}</div>
        <div className="flex items-center gap-2">
          {keyword && (
            <span className="inline-block rounded-full border border-terminal-green/30 bg-terminal-green/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-terminal-green">
              {keyword}
            </span>
          )}
          <span className="text-xs text-terminal-dim">
            [{String(index + 1).padStart(2, '0')}]
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="mb-2 font-mono text-base font-semibold text-foreground group-hover:text-terminal-green">
        <span className="mr-1 text-terminal-green">{'>_'}</span>
        {guideTranslation.title}
      </h3>

      {/* Description */}
      <p className="mb-4 flex-1 font-mono text-xs leading-relaxed text-muted-foreground">
        {guideTranslation.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between font-mono text-xs">
        <span className="text-terminal-dim">
          // {totalResources} {locale === 'es' ? 'recursos' : 'resources'}
        </span>
        <span className="flex items-center gap-1 text-terminal-green opacity-0 transition-opacity group-hover:opacity-100">
          {'>'}_{locale === 'es' ? 'abrir' : 'open'}
          <ArrowRight className="h-3 w-3" />
        </span>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-terminal-green transition-all duration-200 group-hover:w-full" />
    </Link>
    </motion.div>
  )
}
