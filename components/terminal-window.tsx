'use client'

import { useEffect, useState } from 'react'
import { useLocale } from '@/lib/locale-context'
import { getAllGuides, getTotalResources } from '@/lib/guides-data'

type Line =
  | { type: 'prompt'; cmd: string }
  | { type: 'out'; text: string }
  | { type: 'ok'; text: string }
  | { type: 'comment'; text: string }
  | { type: 'quote'; text: string }

export function TerminalWindow() {
  const { locale } = useLocale()
  const guides = getAllGuides()
  const totalResources = guides.reduce((acc, guide) => acc + getTotalResources(guide), 0)
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-GB', { hour12: false }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const lines: Line[] = locale === 'es'
    ? [
        { type: 'prompt', cmd: 'whoami' },
        { type: 'out', text: '> dev_content_creator' },
        { type: 'comment', text: '> // programming + tech' },
        { type: 'prompt', cmd: 'ls ./guides/' },
        { type: 'out', text: `> ${guides.length} guias_disponibles` },
        { type: 'out', text: `> ${totalResources} recursos_creados` },
        { type: 'prompt', cmd: 'cat ./mission.txt' },
        { type: 'quote', text: '> "compartir recursos gratis"' },
        { type: 'quote', text: '> "para que crezcamos juntos 💜"' },
        { type: 'prompt', cmd: './start_learning.sh' },
        { type: 'ok', text: '> [OK] sistema_listo' },
        { type: 'ok', text: '> [OK] scroll_para_explorar ↓' },
      ]
    : [
        { type: 'prompt', cmd: 'whoami' },
        { type: 'out', text: '> dev_content_creator' },
        { type: 'comment', text: '> // programming + tech' },
        { type: 'prompt', cmd: 'ls ./guides/' },
        { type: 'out', text: `> ${guides.length} guides_available` },
        { type: 'out', text: `> ${totalResources} created_resources` },
        { type: 'prompt', cmd: 'cat ./mission.txt' },
        { type: 'quote', text: '> "share free resources"' },
        { type: 'quote', text: '> "so we grow together 💜"' },
        { type: 'prompt', cmd: './start_learning.sh' },
        { type: 'ok', text: '> [OK] system_ready' },
        { type: 'ok', text: '> [OK] scroll_to_explore ↓' },
      ]

  return (
    <div className="w-full max-w-xl overflow-hidden rounded-lg border border-border bg-[#0d0d0d] shadow-[0_0_60px_-15px_rgba(34,197,94,0.15)]">
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-border/70 bg-[#0a0a0a] px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
          ~/ELIJS.DEV — ZSH
        </span>
        <span className="font-mono text-[10px] text-terminal-green">{time || '00:00:00'}</span>
      </div>

      {/* Terminal Content */}
      <div className="p-5 font-mono text-[13px] leading-7">
        {lines.map((line, i) => {
          if (line.type === 'prompt') {
            return (
              <div key={i} className="flex items-center">
                <span className="text-terminal-green">guest@elijs.dev</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-terminal-cyan">~</span>
                <span className="text-muted-foreground">$&nbsp;</span>
                <span className="text-foreground">{line.cmd}</span>
              </div>
            )
          }
          if (line.type === 'comment') {
            return (
              <div key={i} className="text-muted-foreground/70">
                {line.text}
              </div>
            )
          }
          if (line.type === 'ok') {
            return (
              <div key={i} className="text-terminal-green">
                {line.text}
              </div>
            )
          }
          if (line.type === 'quote') {
            return (
              <div key={i} className="text-foreground/80">
                {line.text}
              </div>
            )
          }
          return (
            <div key={i} className="text-foreground/90">
              {line.text}
            </div>
          )
        })}
        {/* Final prompt with blinking cursor */}
        <div className="flex items-center">
          <span className="text-terminal-green">guest@elijs.dev</span>
          <span className="text-muted-foreground">:</span>
          <span className="text-terminal-cyan">~</span>
          <span className="text-muted-foreground">$&nbsp;</span>
          <span className="animate-blink text-terminal-green">▋</span>
        </div>
      </div>
    </div>
  )
}
