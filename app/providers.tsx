'use client'

import { LocaleProvider } from '@/lib/locale-context'
import { FavoritesProvider } from '@/lib/favorites'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <FavoritesProvider>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </div>
      </FavoritesProvider>
    </LocaleProvider>
  )
}
