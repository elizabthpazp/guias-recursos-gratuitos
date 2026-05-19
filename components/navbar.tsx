'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useLocale } from '@/lib/locale-context'
import { LanguageSwitch } from './language-switch'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { t } = useLocale()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-1 text-base tracking-tight"
        >
          <span className="text-terminal-green">{'>'}</span>
          <span className="font-semibold text-foreground">elijs</span>
          <span className="font-semibold text-terminal-green">.dev</span>
          <span className="ml-1 text-primary">{'💜'}</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className={cn(
              'text-sm uppercase tracking-widest transition-colors',
              pathname === '/' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {t.nav.home}
          </Link>
          <Link
            href="/favorites"
            className={cn(
              'flex items-center gap-2 text-sm uppercase tracking-widest transition-colors',
              pathname === '/favorites' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
            )}
          >
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
                'text-sm uppercase tracking-widest transition-colors',
                pathname === '/' ? 'text-foreground' : 'text-muted-foreground'
              )}
            >
              {t.nav.home}
            </Link>
            <Link
              href="/favorites"
              onClick={() => setIsOpen(false)}
              className={cn(
                'flex items-center gap-2 text-sm uppercase tracking-widest transition-colors',
                pathname === '/favorites' ? 'text-foreground' : 'text-muted-foreground'
              )}
            >
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
