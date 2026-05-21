'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'
import { Heart, Zap, ArrowRight } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'
import { getAllGuides, getTotalResources } from '@/lib/guides-data'
import { GuideCard } from './guide-card'
import { SearchInput } from './search-input'
import { TerminalWindow } from './terminal-window'
import { ScrollAnimate, StaggerContainer, StaggerItem } from './scroll-animate'
import { Typewriter } from './typewriter'

export function HomeContent() {
  const { locale, t } = useLocale()
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
    <main className="min-h-screen overflow-x-hidden bg-background">
      {/* Hero Section */}
      <section className="relative min-w-0 overflow-hidden border-b border-border/30">
        {/* subtle radial vignette over the scanlines */}
        <div className="hero-vignette pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            {/* Left: Text Content */}
            <div>
              {/* Version tag */}
              <ScrollAnimate variant="fadeInLeft" delay={0}>
                <div className="mb-8 font-mono text-xs tracking-widest text-terminal-green">
                  <span className="opacity-70">{'\\'} </span>
                  {t.home.versionTag.toUpperCase()}
                </div>
              </ScrollAnimate>

              {/* Main Title with green > prompt */}
              <ScrollAnimate variant="fadeInUp" delay={0.1}>
                <h1 className="mb-8 max-w-2xl font-mono text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]">
                  <span className="mr-2 text-terminal-green">{'>_'}</span>
                  <Typewriter text={t.home.title} speed={25} delay={200} />
                </h1>
              </ScrollAnimate> 

              {/* Subtitle */}
              <ScrollAnimate variant="fadeInUp" delay={0.25}>
                <p className="mb-1 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground md:text-base">
                  {t.home.description}
                </p>
                <p className="mb-3 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground md:text-base">
                  {t.home.descriptionEnd}
                </p>
              </ScrollAnimate>

              {/* By line */}
              <ScrollAnimate variant="fadeInUp" delay={0.3}>
                <p className="mb-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {t.home.byLine.toUpperCase()} <span className="text-primary">💜</span>
                </p>
              </ScrollAnimate>

              {/* CTA buttons */}
              <ScrollAnimate variant="fadeInUp" delay={0.35}>
                <div className="mb-12 flex flex-wrap gap-3">
                  <a
                    href="#guides"
                    className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-foreground transition-all hover:border-terminal-green hover:bg-terminal-green/10 hover:text-terminal-green"
                  >
                    <Zap className="h-3.5 w-3.5" />
                    {t.home.exploreGuides}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <Link
                    href="/favorites"
                    className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                  >
                    <Heart className="h-3.5 w-3.5" />
                    {t.home.favoritesCount}
                  </Link>
                </div>
              </ScrollAnimate>

              {/* Stats row */}
              <ScrollAnimate variant="fadeInUp" delay={0.4}>
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
              </ScrollAnimate>
            </div>

            {/* Right: Terminal Window */}
            <ScrollAnimate variant="fadeInRight" delay={0.3} className="flex justify-center lg:justify-end">
              <TerminalWindow />
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Weekly update notice */}
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-0">
        <ScrollAnimate variant="fadeInUp">
          <div className="flex items-center gap-3 rounded-2xl border border-terminal-green/20 bg-terminal-green/5 px-5 py-3">
            <span className="text-lg">📢</span>
            <p className="font-mono text-xs text-muted-foreground md:text-sm">
              <span className="font-semibold text-terminal-green">
                {locale === 'es' ? 'Nueva guía cada semana' : 'New guide every week'}
              </span>
              {' — '}
              {locale === 'es'
                ? 'Cada semana publico nuevos recursos gratuitos y los dejo aquí para ti. ¡Sígueme para no perderte ninguna!'
                : 'Every week I publish new free resources and leave them here for you. Follow me so you don\'t miss any!'}
            </p>
          </div>
        </ScrollAnimate>
      </div>

      {/* Guides Section */}
      <section id="guides" className="mx-auto max-w-7xl px-6 py-12">
        <ScrollAnimate variant="fadeInUp">
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
        </ScrollAnimate>

        {filteredGuides.length > 0 ? (
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGuides.map((guide, index) => (
              <StaggerItem key={guide.id}>
                <GuideCard guide={guide} index={index} />
              </StaggerItem>
            ))}
          </StaggerContainer>
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
