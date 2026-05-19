'use client'

import { Coffee, Heart } from 'lucide-react'
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
  const { t } = useLocale()

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 font-mono text-lg font-bold text-foreground">
            <span className="text-terminal-green">{'>'}</span>
            <span>elijs.dev</span>
            <span className="text-primary">{'</>'}</span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-muted-foreground transition-colors hover:text-terminal-cyan"
              >
                {social.name}
              </a>
            ))}
          </div>

          {/* Donate Button */}
          <a
            href="https://buymeacoffee.com/elizabethph"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-primary bg-primary/10 px-4 py-2 font-mono text-sm text-primary transition-colors hover:bg-primary/20"
          >
            <Coffee className="h-4 w-4" />
            {t.footer.support}
          </a>

          {/* Made with love */}
          <p className="flex items-center gap-1 font-mono text-sm text-muted-foreground">
            {t.footer.madeWith}{' '}
            <Heart className="h-4 w-4 fill-primary text-primary" />{' '}
            {t.footer.by}{' '}
            <a
              href="https://www.elijs.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-green transition-colors hover:text-terminal-cyan"
            >
              @elijs.dev
            </a>
          </p>

          {/* Copyright */}
          <p className="font-mono text-xs text-terminal-dim">
            &copy; {new Date().getFullYear()} elijs.dev
          </p>
        </div>
      </div>
    </footer>
  )
}
