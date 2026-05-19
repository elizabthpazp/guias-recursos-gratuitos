'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Copy, ExternalLink, Heart, Share2, Twitter } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'
import { useFavorites, type FavoriteResource } from '@/lib/favorites'
import { type Resource } from '@/lib/guides-data'
import { cn } from '@/lib/utils'

interface ResourceCardProps {
  resource: Resource
  guideId: string
  guideTitle: string
}

export function ResourceCard({ resource, guideId, guideTitle }: ResourceCardProps) {
  const { locale, t } = useLocale()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [copied, setCopied] = useState(false)
  const [showShare, setShowShare] = useState(false)

  const favorite = isFavorite(resource.id)

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(resource.url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleToggleFavorite = () => {
    const favoriteResource: Omit<FavoriteResource, 'addedAt'> = {
      id: resource.id,
      name: resource.name,
      description: resource.description,
      url: resource.url,
      guideId,
      guideTitle,
    }
    toggleFavorite(favoriteResource)
  }

  const shareOnTwitter = () => {
    const text = `Check out ${resource.name}: ${resource.description}`
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(resource.url)}`
    window.open(url, '_blank')
  }

  return (
    <motion.div
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className={cn(
        'group relative flex flex-col rounded-2xl border border-border bg-card p-4 transition-all duration-200',
        'hover:border-terminal-green'
      )}
    >
      {/* Header */}
      <div className="mb-2 flex items-start justify-between gap-2">
        <h4 className="text-sm font-semibold text-foreground group-hover:text-terminal-green">
          {resource.name}
        </h4>
        <div className="flex shrink-0 items-center gap-1">
          {/* Favorite button */}
          <button
            onClick={handleToggleFavorite}
            className={cn(
              'rounded p-1 transition-colors',
              favorite
                ? 'text-primary'
                : 'text-terminal-dim hover:text-primary'
            )}
            title={favorite ? t.guide.removeFromFavorites : t.guide.addToFavorites}
          >
            <Heart className={cn('h-4 w-4', favorite && 'fill-current')} />
          </button>

          {/* Share dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowShare(!showShare)}
              className="rounded p-1 text-terminal-dim transition-colors hover:text-terminal-cyan"
              title={t.guide.share}
            >
              <Share2 className="h-4 w-4" />
            </button>
            {showShare && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowShare(false)}
                />
                <div className="absolute right-0 top-full z-20 mt-1 flex flex-col gap-1 rounded border border-border bg-card p-2 shadow-lg">
                  <button
                    onClick={() => {
                      handleCopyLink()
                      setShowShare(false)
                    }}
                    className="flex items-center gap-2 whitespace-nowrap rounded px-2 py-1 text-xs text-foreground transition-colors hover:bg-secondary"
                  >
                    {copied ? (
                      <Check className="h-3 w-3 text-terminal-green" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                    {copied ? t.guide.linkCopied : t.guide.copyLink}
                  </button>
                  <button
                    onClick={() => {
                      shareOnTwitter()
                      setShowShare(false)
                    }}
                    className="flex items-center gap-2 whitespace-nowrap rounded px-2 py-1 text-xs text-foreground transition-colors hover:bg-secondary"
                  >
                    <Twitter className="h-3 w-3" />
                    Twitter
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mb-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {resource.description}
      </p>

      {/* Link */}
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-xs text-terminal-green transition-colors hover:underline"
      >
        <ExternalLink className="h-3 w-3" />
        {locale === 'es' ? 'Visitar' : 'Visit'}
      </a>
    </motion.div>
  )
}
