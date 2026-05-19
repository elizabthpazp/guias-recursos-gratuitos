'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'
import { type Guide, getTotalResources } from '@/lib/guides-data'
import { cn } from '@/lib/utils'

interface GuideCardProps {
  guide: Guide
  index: number
}

export function GuideCard({ guide, index }: GuideCardProps) {
  const { locale, t } = useLocale()
  const guideTranslation = t.guides[guide.slug as keyof typeof t.guides]
  const totalResources = getTotalResources(guide)

  return (
    <Link
      href={`/guides/${guide.slug}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card p-5 transition-all duration-200',
        'hover:border-terminal-green hover:bg-card/80',
      )}
    >
      {/* Header with icon and index */}
      <div className="mb-3 flex items-start justify-between">
        <div className="text-3xl">{guide.icon}</div>
        <span className="text-xs text-terminal-dim">
          [{String(index + 1).padStart(2, '0')}]
        </span>
      </div>

      {/* Title */}
      <h3 className="mb-2 font-mono text-base font-semibold text-foreground group-hover:text-terminal-green">
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
  )
}
