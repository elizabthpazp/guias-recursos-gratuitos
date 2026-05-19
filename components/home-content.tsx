'use client'

import { useState, useMemo } from 'react'
import { useLocale } from '@/lib/locale-context'
import { getAllGuides } from '@/lib/guides-data'
import { GuideCard } from './guide-card'
import { SearchInput } from './search-input'

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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          {/* Terminal decoration */}
          <div className="mb-6 font-mono text-sm text-terminal-dim">
            <span className="text-terminal-green">user@elijs.dev</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-terminal-cyan">~</span>
            <span className="text-muted-foreground">$</span>
            <span className="ml-2 text-foreground">cat resources.md</span>
            <span className="animate-blink ml-1 text-terminal-green">_</span>
          </div>

          {/* Title */}
          <h1 className="mb-4 font-mono text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            <span className="text-terminal-green">{'>'}</span>{' '}
            {t.home.title}
            <span className="text-primary">_</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 max-w-2xl font-mono text-lg text-terminal-cyan md:text-xl">
            {t.home.subtitle}
          </p>

          {/* Description */}
          <p className="max-w-3xl text-muted-foreground">
            {t.home.description}
          </p>
        </div>

        {/* Background decoration */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 font-mono text-[200px] font-bold text-border/20 select-none">
          {'</>'}
        </div>
      </section>

      {/* Guides Section */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        {/* Section header with search */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-mono text-2xl font-bold text-foreground">
              <span className="text-terminal-green">#</span> {t.home.allGuides}
            </h2>
            <p className="mt-1 font-mono text-sm text-muted-foreground">
              {guides.length} {t.home.resources}
            </p>
          </div>
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder={t.home.searchPlaceholder}
            className="md:w-80"
          />
        </div>

        {/* Guides grid */}
        {filteredGuides.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGuides.map((guide, index) => (
              <GuideCard key={guide.id} guide={guide} index={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="font-mono text-lg text-muted-foreground">
              {t.home.noResults}
            </p>
            <button
              onClick={() => setSearch('')}
              className="mt-4 font-mono text-sm text-terminal-cyan transition-colors hover:text-terminal-green"
            >
              [Clear search]
            </button>
          </div>
        )}
      </section>
    </main>
  )
}
