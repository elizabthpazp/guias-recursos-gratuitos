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
        'group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card p-6 transition-all duration-300',
        'hover:border-primary hover:shadow-lg hover:shadow-primary/10',
        'animate-in fade-in slide-in-from-bottom-4',
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Terminal decoration */}
      <div className="absolute right-4 top-4 font-mono text-xs text-terminal-dim">
        [{String(index + 1).padStart(2, '0')}]
      </div>

      {/* Icon */}
      <div className="mb-4 text-4xl">{guide.icon}</div>

      {/* Title */}
      <h3 className="mb-2 font-mono text-lg font-bold text-foreground group-hover:text-terminal-green">
        {guideTranslation.title}
      </h3>

      {/* Description */}
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {guideTranslation.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-terminal-cyan">
          {totalResources} {t.home.resources}
        </span>
        <span className="flex items-center gap-1 font-mono text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">
          {t.home.viewGuide}
          <ArrowRight className="h-3 w-3" />
        </span>
      </div>

      {/* Hover line effect */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
    </Link>
  )
}
