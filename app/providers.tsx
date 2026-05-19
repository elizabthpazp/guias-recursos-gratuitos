'use client'

import { LocaleProvider } from '@/lib/locale-context'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </div>
    </LocaleProvider>
  )
}
