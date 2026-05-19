'use client'

import { useEffect, useState } from 'react'

export interface FavoriteResource {
  id: string
  name: string
  description: string
  url: string
  guideId: string
  guideTitle: string
  addedAt: number
}

const FAVORITES_KEY = 'elijs-dev-favorites'

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteResource[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY)
    if (stored) {
      try {
        setFavorites(JSON.parse(stored))
      } catch {
        setFavorites([])
      }
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
    }
  }, [favorites, isLoaded])

  const addFavorite = (resource: Omit<FavoriteResource, 'addedAt'>) => {
    setFavorites((prev) => {
      if (prev.some((f) => f.id === resource.id)) return prev
      return [...prev, { ...resource, addedAt: Date.now() }]
    })
  }

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id))
  }

  const isFavorite = (id: string) => {
    return favorites.some((f) => f.id === id)
  }

  const toggleFavorite = (resource: Omit<FavoriteResource, 'addedAt'>) => {
    if (isFavorite(resource.id)) {
      removeFavorite(resource.id)
    } else {
      addFavorite(resource)
    }
  }

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    isLoaded,
  }
}
