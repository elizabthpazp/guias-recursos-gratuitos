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
      <section className="relative min-h-[70vh] overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Text Content */}
            <div>
              {/* Version tag */}
              <div className="mb-8 text-sm text-terminal-green">
                {'>'}_{'  '}[ GUIDES_V1.0 // BUILD_2026 ]
              </div>

              {/* Main Title */}
              <h1 className="mb-6 text-4xl font-bold leading-tight text-terminal-green md:text-5xl lg:text-6xl">
                <span className="text-terminal-green">{'>'}</span>
                <span className="text-terminal-red">_</span>{' '}
                {t.home.title}
              </h1>

              {/* Blinking underscore */}
              <div className="mb-6">
                <span className="animate-blink text-2xl text-terminal-green">_</span>
              </div>

              {/* Subtitle */}
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                {t.home.description}{' '}
                <span className="text-primary">{'💜'}</span>{' '}
                {locale === 'es' ? 'para mi audiencia tech.' : 'for my tech audience.'}
              </p>
            </div>

            {/* Right: Terminal Window */}
            <div className="hidden justify-end lg:flex">
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
            <h2 className="text-xl font-semibold text-foreground">
              <span className="text-terminal-green">#</span> {t.home.allGuides}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredGuides.map((guide, index) => (
              <GuideCard key={guide.id} guide={guide} index={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-base text-muted-foreground">
              {t.home.noResults}
            </p>
            <button
              onClick={() => setSearch('')}
              className="mt-4 text-sm text-terminal-green transition-colors hover:underline"
            >
              [{locale === 'es' ? 'Limpiar búsqueda' : 'Clear search'}]
            </button>
          </div>
        )}
      </section>
    </main>
  )
}
