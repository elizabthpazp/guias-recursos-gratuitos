'use client'

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react'

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

interface FavoritesContextValue {
  favorites: FavoriteResource[]
  addFavorite: (resource: Omit<FavoriteResource, 'addedAt'>) => void
  removeFavorite: (id: string) => void
  isFavorite: (id: string) => boolean
  toggleFavorite: (resource: Omit<FavoriteResource, 'addedAt'>) => void
  isLoaded: boolean
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null)

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteResource[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load from localStorage on mount
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

  // Save to localStorage only after initial load
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
    }
  }, [favorites, isLoaded])

  const addFavorite = useCallback((resource: Omit<FavoriteResource, 'addedAt'>) => {
    setFavorites((prev) => {
      if (prev.some((f) => f.id === resource.id)) return prev
      return [...prev, { ...resource, addedAt: Date.now() }]
    })
  }, [])

  const removeFavorite = useCallback((id: string) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id))
  }, [])

  const isFavorite = useCallback((id: string) => {
    return favorites.some((f) => f.id === id)
  }, [favorites])

  const toggleFavorite = useCallback((resource: Omit<FavoriteResource, 'addedAt'>) => {
    setFavorites((prev) => {
      const exists = prev.some((f) => f.id === resource.id)
      if (exists) {
        return prev.filter((f) => f.id !== resource.id)
      }
      return [...prev, { ...resource, addedAt: Date.now() }]
    })
  }, [])

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite, toggleFavorite, isLoaded }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}
