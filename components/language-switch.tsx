'use client'

import { useLocale } from '@/lib/locale-context'
import { cn } from '@/lib/utils'

export function LanguageSwitch() {
  const { locale, setLocale } = useLocale()

  return (
    <div className="flex items-center gap-1 rounded-md border border-border bg-secondary p-1 font-mono text-xs">
      <button
        onClick={() => setLocale('es')}
        className={cn(
          'rounded px-2 py-1 transition-colors',
          locale === 'es'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        ES
      </button>
      <button
        onClick={() => setLocale('en')}
        className={cn(
          'rounded px-2 py-1 transition-colors',
          locale === 'en'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        EN
      </button>
    </div>
  )
}
