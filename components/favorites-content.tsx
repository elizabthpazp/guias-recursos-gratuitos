'use client'

import Link from 'next/link'
import { ExternalLink, Heart, Trash2 } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'
import { useFavorites } from '@/lib/favorites'
import { cn } from '@/lib/utils'

export function FavoritesContent() {
  const { t } = useLocale()
  const { favorites, removeFavorite, isLoaded } = useFavorites()

  if (!isLoaded) {
    return (
      <main className="min-h-screen">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-center justify-center">
            <div className="font-mono text-muted-foreground">Loading...</div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex items-center gap-3">
            <Heart className="h-8 w-8 fill-primary text-primary" />
            <h1 className="font-mono text-2xl font-bold text-foreground md:text-3xl">
              {t.favorites.title}
            </h1>
          </div>
          {favorites.length > 0 && (
            <p className="mt-2 font-mono text-sm text-terminal-cyan">
              {favorites.length} {t.guide.resources}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        {favorites.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {favorites.map((favorite) => (
              <div
                key={favorite.id}
                className={cn(
                  'group relative flex flex-col rounded-md border border-border bg-card p-4 transition-all',
                  'hover:border-primary/50 hover:bg-card/80'
                )}
              >
                {/* Guide badge */}
                <div className="mb-2 font-mono text-xs text-terminal-dim">
                  {favorite.guideTitle}
                </div>

                {/* Header */}
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="font-mono text-sm font-semibold text-foreground group-hover:text-terminal-green">
                    {favorite.name}
                  </h3>
                  <button
                    onClick={() => removeFavorite(favorite.id)}
                    className="rounded p-1 text-muted-foreground transition-colors hover:text-destructive"
                    title={t.guide.removeFromFavorites}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                {/* Description */}
                <p className="mb-3 flex-1 text-sm text-muted-foreground">
                  {favorite.description}
                </p>

                {/* Link */}
                <a
                  href={favorite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-mono text-xs text-terminal-cyan transition-colors hover:text-terminal-green"
                >
                  <ExternalLink className="h-3 w-3" />
                  {t.guide.visit}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Heart className="mb-4 h-16 w-16 text-border" />
            <p className="font-mono text-lg text-muted-foreground">
              {t.favorites.empty}
            </p>
            <p className="mt-2 text-sm text-terminal-dim">
              {t.favorites.emptyDesc}
            </p>
            <Link
              href="/"
              className="mt-6 rounded-md border border-primary bg-primary/10 px-4 py-2 font-mono text-sm text-primary transition-colors hover:bg-primary/20"
            >
              {t.favorites.explore}
            </Link>
          </div>
        )}
      </section>
    </main>
  )
}
