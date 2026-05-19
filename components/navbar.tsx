'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Heart, Home, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useLocale } from '@/lib/locale-context'
import { LanguageSwitch } from './language-switch'
import { cn } from '@/lib/utils'

const socials = [
  { name: 'GitHub', url: 'https://github.com/elizabthpazp', icon: 'GH' },
  { name: 'Instagram', url: 'https://www.instagram.com/elijs.dev/', icon: 'IG' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@elijs.dev', icon: 'TT' },
  { name: 'YouTube', url: 'https://www.youtube.com/@elijsdev', icon: 'YT' },
  { name: 'Twitch', url: 'https://www.twitch.tv/elijsdev', icon: 'TW' },
]

export function Navbar() {
  const { t } = useLocale()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 font-mono text-lg font-bold text-foreground transition-colors hover:text-primary"
        >
          <span className="text-terminal-green">{'>'}</span>
          <span>elijs.dev</span>
          <span className="text-primary">{'</>'}</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className={cn(
              'flex items-center gap-1.5 font-mono text-sm transition-colors hover:text-terminal-green',
              pathname === '/' ? 'text-terminal-green' : 'text-muted-foreground'
            )}
          >
            <Home className="h-4 w-4" />
            {t.nav.home}
          </Link>
          <Link
            href="/favorites"
            className={cn(
              'flex items-center gap-1.5 font-mono text-sm transition-colors hover:text-primary',
              pathname === '/favorites' ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            <Heart className="h-4 w-4" />
            {t.nav.favorites}
          </Link>
          
          <div className="flex items-center gap-3 border-l border-border pl-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted-foreground transition-colors hover:text-terminal-cyan"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <LanguageSwitch />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                'flex items-center gap-2 font-mono text-sm transition-colors',
                pathname === '/' ? 'text-terminal-green' : 'text-muted-foreground'
              )}
            >
              <Home className="h-4 w-4" />
              {t.nav.home}
            </Link>
            <Link
              href="/favorites"
              onClick={() => setIsOpen(false)}
              className={cn(
                'flex items-center gap-2 font-mono text-sm transition-colors',
                pathname === '/favorites' ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              <Heart className="h-4 w-4" />
              {t.nav.favorites}
            </Link>
            
            <div className="flex items-center gap-3 border-t border-border pt-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-muted-foreground transition-colors hover:text-terminal-cyan"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="border-t border-border pt-4">
              <LanguageSwitch />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
