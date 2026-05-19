'use client'

import { useLocale } from '@/lib/locale-context'
import { cn } from '@/lib/utils'

export function LanguageSwitch() {
  const { locale, setLocale } = useLocale()

  return (
    <div className="flex items-center overflow-hidden rounded border border-border font-mono text-[11px] tracking-widest">
      <button
        onClick={() => setLocale('es')}
        aria-pressed={locale === 'es'}
        className={cn(
          'px-2.5 py-1 transition-colors',
          locale === 'es'
            ? 'bg-terminal-green text-black'
            : 'text-muted-foreground hover:text-foreground',
        )}
      >
        ES
      </button>
      <span className="text-border">|</span>
      <button
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        className={cn(
          'px-2.5 py-1 transition-colors',
          locale === 'en'
            ? 'bg-terminal-green text-black'
            : 'text-muted-foreground hover:text-foreground',
        )}
      >
        EN
      </button>
    </div>
  )
}
