'use client'

import { Heart } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'

const socials = [
  { name: 'Web', url: 'https://www.elijs.dev/' },
  { name: 'GitHub', url: 'https://github.com/elizabthpazp' },
  { name: 'Instagram', url: 'https://www.instagram.com/elijs.dev/' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@elijs.dev' },
  { name: 'YouTube', url: 'https://www.youtube.com/@elijsdev' },
  { name: 'Twitch', url: 'https://www.twitch.tv/elijsdev' },
]

export function Footer() {
  const { locale, t } = useLocale()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-1 text-base">
            <span className="text-terminal-green">{'>'}</span>
            <span className="font-semibold text-foreground">elijs</span>
            <span className="font-semibold text-terminal-green">.dev</span>
            <span className="ml-1 text-primary">{'💜'}</span>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-terminal-green">
              {locale === 'es' ? '// sígueme' : '// follow me'}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-terminal-green"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Donate Button - oculto temporalmente */}
          {/* <a
            href="https://buymeacoffee.com/elizabethph"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded border border-terminal-yellow bg-terminal-yellow/10 px-4 py-2 text-sm text-terminal-yellow transition-colors hover:bg-terminal-yellow/20"
          >
            <Coffee className="h-4 w-4" />
            {t.footer.support}
          </a> */}

          {/* Made with love */}
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            {t.footer.madeWith}{' '}
            <Heart className="h-3.5 w-3.5 fill-primary text-primary" />{' '}
            {t.footer.by}{' '}
            <a
              href="https://www.elijs.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-green hover:underline"
            >
              @elijs.dev
            </a>
          </p>

          {/* Copyright */}
          <p className="text-xs text-terminal-dim">
            &copy; {new Date().getFullYear()} elijs.dev • {locale === 'es' ? 'Todos los derechos reservados' : 'All rights reserved'}
          </p>
        </div>
      </div>
    </footer>
  )
}
