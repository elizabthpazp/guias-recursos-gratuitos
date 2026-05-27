'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { type Locale, getTranslations } from './i18n'

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: ReturnType<typeof getTranslations>
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

const LOCALE_KEY = 'elijs-dev-locale'

const PAGE_TITLES: Record<Locale, string> = {
  es: 'elijs.dev | Guías y Recursos Gratuitos para Programadores',
  en: 'elijs.dev | Free Guides & Resources for Programmers',
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(LOCALE_KEY) as Locale | null
    if (stored && (stored === 'es' || stored === 'en')) {
      setLocaleState(stored)
    }
    setIsLoaded(true)
  }, [])

  // Update document title and lang attribute when locale changes
  useEffect(() => {
    if (isLoaded) {
      document.title = PAGE_TITLES[locale]
      document.documentElement.lang = locale
      // Also update the <title> tag in <head> to prevent Next.js metadata from overriding
      const titleElement = document.querySelector('head title')
      if (titleElement) {
        titleElement.textContent = PAGE_TITLES[locale]
      }
    }
  }, [locale, isLoaded])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem(LOCALE_KEY, newLocale)
  }

  const t = getTranslations(locale)

  if (!isLoaded) {
    return null
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return context
}
