'use client'

import { useLocale } from '@/lib/locale-context'
import { cn } from '@/lib/utils'

export function LanguageSwitch() {
  const { locale, setLocale } = useLocale()

  return (
    <div className="flex items-center gap-0 rounded border border-border text-xs">
      <button
        onClick={() => setLocale('es')}
        className={cn(
          'px-2.5 py-1.5 transition-colors',
          locale === 'es'
            ? 'bg-foreground text-background'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        ES
      </button>
      <span className="text-muted-foreground">|</span>
      <button
        onClick={() => setLocale('en')}
        className={cn(
          'px-2.5 py-1.5 transition-colors',
          locale === 'en'
            ? 'bg-foreground text-background'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        EN
      </button>
    </div>
  )
}
