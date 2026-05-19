'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Heart } from 'lucide-react'
import { useState } from 'react'
import { useLocale } from '@/lib/locale-context'
import { LanguageSwitch } from './language-switch'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { t } = useLocale()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1 font-mono text-base tracking-tight"
          aria-label="elijs.dev home"
        >
          <span className="mr-1 text-terminal-green">{'>'}</span>
          <span className="font-semibold text-foreground">elijs</span>
          <span className="font-semibold text-terminal-green">&nbsp;.dev</span>
          <span className="ml-1 text-primary">💜</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className={cn(
              'font-mono text-xs uppercase tracking-[0.2em] transition-colors',
              pathname === '/'
                ? 'text-terminal-green'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {t.nav.home}
          </Link>
          <Link
            href="/favorites"
            className={cn(
              'flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] transition-colors',
              pathname === '/favorites'
                ? 'text-primary'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            <Heart className="h-3.5 w-3.5" />
            {t.nav.favorites}
          </Link>

          <LanguageSwitch />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                'font-mono text-xs uppercase tracking-[0.2em] transition-colors',
                pathname === '/' ? 'text-terminal-green' : 'text-muted-foreground',
              )}
            >
              {t.nav.home}
            </Link>
            <Link
              href="/favorites"
              onClick={() => setIsOpen(false)}
              className={cn(
                'flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] transition-colors',
                pathname === '/favorites' ? 'text-primary' : 'text-muted-foreground',
              )}
            >
              <Heart className="h-3.5 w-3.5" />
              {t.nav.favorites}
            </Link>

            <div className="border-t border-border pt-4">
              <LanguageSwitch />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
