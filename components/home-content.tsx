'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'
import { Heart, Zap, ArrowRight } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'
import { getAllGuides, getTotalResources } from '@/lib/guides-data'
import { GuideCard } from './guide-card'
import { SearchInput } from './search-input'
import { TerminalWindow } from './terminal-window'

export function HomeContent() {
  const { t } = useLocale()
  const [search, setSearch] = useState('')
  const guides = getAllGuides()

  const filteredGuides = useMemo(() => {
    if (!search) return guides
    const query = search.toLowerCase()
    return guides.filter((guide) => {
      const guideTranslation = t.guides[guide.slug as keyof typeof t.guides]
      return (
        guideTranslation.title.toLowerCase().includes(query) ||
        guideTranslation.description.toLowerCase().includes(query)
      )
    })
  }, [guides, search, t.guides])

  const totalResources = useMemo(
    () => guides.reduce((acc, guide) => acc + getTotalResources(guide), 0),
    [guides],
  )

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/30">
        {/* subtle radial vignette over the scanlines */}
        <div className="hero-vignette pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            {/* Left: Text Content */}
            <div>
              {/* Version tag */}
              <div className="mb-8 font-mono text-xs tracking-widest text-terminal-green">
                <span className="opacity-70">{'\\'} </span>
                {t.home.versionTag.toUpperCase()}
              </div>

              {/* Main Title with green > prompt */}
              <h1 className="mb-8 max-w-2xl font-mono text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]">
                <span className="mr-2 text-terminal-green">{'>_'}</span>
                {t.home.title}
              </h1>

              {/* Green underline accent */}
              <div className="mb-6 h-1 w-14 bg-terminal-green" />

              {/* Subtitle */}
              <p className="mb-1 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground md:text-base">
                {t.home.description}
              </p>
              <p className="mb-3 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground md:text-base">
                <span className="text-primary">💜</span>{' '}
                {t.home.descriptionEnd}
              </p>

              {/* By line */}
              <p className="mb-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {t.home.byLine.toUpperCase()} <span className="text-primary">💜</span>
              </p>

              {/* CTA buttons */}
              <div className="mb-12 flex flex-wrap gap-3">
                <a
                  href="#guides"
                  className="group inline-flex items-center gap-2 border border-border bg-card/50 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-foreground transition-all hover:border-terminal-green hover:bg-terminal-green/10 hover:text-terminal-green"
                >
                  <Zap className="h-3.5 w-3.5" />
                  {t.home.exploreGuides}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link
                  href="/favorites"
                  className="group inline-flex items-center gap-2 border border-border bg-card/50 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                >
                  <Heart className="h-3.5 w-3.5" />
                  {t.home.favoritesCount}
                </Link>
              </div>

              {/* Stats row */}
              <div className="grid max-w-md grid-cols-3 gap-6 border-t border-border/40 pt-6">
                <div>
                  <div className="font-mono text-3xl font-bold text-terminal-green md:text-4xl">
                    {guides.length}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {t.home.guidesCount}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-primary md:text-4xl">
                    {totalResources}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {t.home.resourcesCount}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-terminal-green md:text-4xl">
                    100%
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {t.home.freeLabel}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Terminal Window */}
            <div className="flex justify-center lg:justify-end">
              <TerminalWindow />
            </div>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-mono text-lg font-semibold text-foreground">
              <span className="text-terminal-green">#</span> {t.home.allGuides}
            </h2>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              // {guides.length} {t.home.resources}
            </p>
          </div>
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder={t.home.searchPlaceholder}
            className="md:w-72"
          />
        </div>

        {filteredGuides.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGuides.map((guide, index) => (
              <GuideCard key={guide.id} guide={guide} index={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="font-mono text-sm text-muted-foreground">// {t.home.noResults}</p>
            <button
              onClick={() => setSearch('')}
              className="mt-4 font-mono text-xs text-terminal-green transition-colors hover:underline"
            >
              [{t.home.clearSearch}]
            </button>
          </div>
        )}
      </section>
    </main>
  )
}
