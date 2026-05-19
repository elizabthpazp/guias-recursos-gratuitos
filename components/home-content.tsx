'use client'

import { useState, useMemo } from 'react'
import { useLocale } from '@/lib/locale-context'
import { getAllGuides } from '@/lib/guides-data'
import { GuideCard } from './guide-card'
import { SearchInput } from './search-input'
import { TerminalWindow } from './terminal-window'

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

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/30">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left: Text Content */}
            <div>
              {/* Version tag */}
              <div className="mb-6 font-mono text-sm text-terminal-green">
                {'>'}_{'  '}[ GUIDES_V1.0 // BUILD_2026 ]
              </div>

              {/* Main Title */}
              <h1 className="mb-4 font-mono text-3xl font-bold leading-tight text-terminal-green md:text-4xl lg:text-5xl">
                <span className="text-terminal-green">{'>'}</span>
                <span className="text-primary">_</span>{' '}
                {t.home.title}
              </h1>

              {/* Blinking underscore */}
              <div className="mb-4">
                <span className="animate-blink font-mono text-xl text-terminal-green">_</span>
              </div>

              {/* Subtitle */}
              <p className="max-w-lg font-mono text-sm leading-relaxed text-muted-foreground md:text-base">
                {t.home.description}{' '}
                <span className="text-primary">{'<3'}</span>{' '}
                {locale === 'es' ? 'para mi audiencia tech.' : 'for my tech audience.'}
              </p>
            </div>

            {/* Right: Terminal Window */}
            <div className="flex justify-center lg:justify-end">
              <TerminalWindow />
            </div>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        {/* Section header with search */}
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

        {/* Guides grid */}
        {filteredGuides.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGuides.map((guide, index) => (
              <GuideCard key={guide.id} guide={guide} index={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="font-mono text-sm text-muted-foreground">
              // {t.home.noResults}
            </p>
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
