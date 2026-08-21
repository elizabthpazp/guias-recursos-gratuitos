'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'

export function InstagramBanner() {
  const { locale } = useLocale()

  return (
    <div className="mx-auto max-w-7xl px-6 pt-6">
      <a
        href="https://www.instagram.com/elijs.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-between gap-3 overflow-hidden rounded-2xl border border-border bg-card px-4 py-3 transition-all duration-300 hover:border-pink-500/30 hover:shadow-[0_0_20px_rgba(236,72,153,0.08)] md:px-5 md:py-3.5"
      >
        {/* sutil gradient hover overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-pink-500/[0.04] via-purple-500/[0.04] to-orange-400/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative flex min-w-0 items-center gap-3 md:gap-4">
          {/* icono instagram con gradient */}
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 shadow-sm md:h-9 md:w-9">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white md:h-[18px] md:w-[18px]" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.162 6.162 6.162 0 000-12.162zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </div>

          <div className="min-w-0">
            <p className="flex items-center gap-1.5 text-sm font-medium leading-none text-foreground">
              <span className="hidden sm:inline">
                {locale === 'es' ? 'Mi comunidad en Instagram' : 'My community on Instagram'}
              </span>
              <span className="sm:hidden">Instagram</span>
              <Sparkles className="h-3 w-3 shrink-0 text-pink-500" />
              <span className="hidden rounded-full bg-pink-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-pink-500 md:inline-flex">
                @elijs.dev
              </span>
            </p>
            <p className="mt-1 line-clamp-1 text-xs leading-tight text-muted-foreground md:text-[13px]">
              {locale === 'es'
                ? 'Nuevas guías, recursos y tips cada semana — no te pierdas nada'
                : 'New guides, resources & tips every week — don\'t miss out'}
            </p>
          </div>
        </div>

        <div className="relative flex shrink-0 items-center gap-2">
          <span className="hidden items-center gap-1.5 rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1.5 font-mono text-xs font-medium tracking-wide text-pink-600 transition-colors group-hover:bg-pink-500 group-hover:text-white md:inline-flex dark:text-pink-400">
            {locale === 'es' ? 'Ver' : 'Check it'}
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </span>
          {/* mobile arrow */}
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-500 transition-colors group-hover:bg-pink-500 group-hover:text-white md:hidden">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </a>
    </div>
  )
}
