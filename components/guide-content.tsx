'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft, Share2, Copy, Check } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'
import { type Guide, getTotalResources } from '@/lib/guides-data'
import { SearchInput } from '@/components/search-input'
import { ResourceCard } from '@/components/resource-card'

interface GuideContentProps {
  guide: Guide
}

export function GuideContent({ guide }: GuideContentProps) {
  const { locale, t } = useLocale()
  const [search, setSearch] = useState('')
  const [copied, setCopied] = useState(false)
  
  const guideTranslation = t.guides[guide.slug as keyof typeof t.guides]
  const totalResources = getTotalResources(guide)

  const filteredSections = useMemo(() => {
    if (!search) return guide.sections
    const query = search.toLowerCase()
    return guide.sections
      .map((section) => ({
        ...section,
        resources: section.resources.filter(
          (resource) =>
            resource.name.toLowerCase().includes(query) ||
            resource.description.toLowerCase().includes(query)
        ),
      }))
      .filter((section) => section.resources.length > 0)
  }, [guide.sections, search])

  const filteredResourcesCount = useMemo(() => {
    return filteredSections.reduce((acc, section) => acc + section.resources.length, 0)
  }, [filteredSections])

  const handleCopyPageLink = async () => {
    await navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-8">
          {/* Back link */}
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-terminal-green"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.guide.backToHome}
          </Link>

          {/* Title row */}
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-4">
              <span className="text-5xl">{guide.icon}</span>
              <div>
                <h1 className="font-mono text-2xl font-bold text-foreground md:text-3xl">
                  {guideTranslation.title}
                </h1>
                <p className="mt-2 max-w-2xl text-muted-foreground">
                  {guideTranslation.description}
                </p>
                <p className="mt-2 font-mono text-sm text-terminal-cyan">
                  {totalResources} {t.guide.resources}
                </p>
              </div>
            </div>

            {/* Share button */}
            <button
              onClick={handleCopyPageLink}
              className="flex items-center gap-2 rounded-md border border-border bg-secondary px-3 py-2 font-mono text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-terminal-green" />
                  {t.guide.linkCopied}
                </>
              ) : (
                <>
                  <Share2 className="h-4 w-4" />
                  {t.guide.share}
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        {/* Search */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder={t.guide.searchPlaceholder}
            className="md:w-80"
          />
          {search && (
            <p className="font-mono text-sm text-muted-foreground">
              {filteredResourcesCount} {t.guide.resources}
            </p>
          )}
        </div>

        {/* Sections */}
        {filteredSections.length > 0 ? (
          <div className="space-y-12">
            {filteredSections.map((section) => (
              <div key={section.id}>
                {/* Section title */}
                <h2 className="mb-6 font-mono text-lg font-bold text-foreground">
                  <span className="text-terminal-green">#</span>{' '}
                  {section.title[locale]}
                </h2>

                {/* Resources grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {section.resources.map((resource) => (
                    <ResourceCard
                      key={resource.id}
                      resource={resource}
                      guideId={guide.id}
                      guideTitle={guideTranslation.title}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="font-mono text-lg text-muted-foreground">
              {t.guide.noResults}
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
