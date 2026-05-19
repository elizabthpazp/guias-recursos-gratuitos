'use client'

import { useEffect, useState } from 'react'
import { useLocale } from '@/lib/locale-context'
import { getAllGuides, getTotalResources } from '@/lib/guides-data'

export function TerminalWindow() {
  const { locale } = useLocale()
  const guides = getAllGuides()
  const totalResources = guides.reduce((acc, guide) => acc + getTotalResources(guide), 0)
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { hour12: false }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const lines = locale === 'es' 
    ? [
        { prompt: true, cmd: 'whoami' },
        { output: '> dev_content_creator' },
        { output: '> // programming + tech' },
        { prompt: true, cmd: 'ls ./guides/' },
        { output: `> ${guides.length} guías_disponibles` },
        { output: `> ${totalResources} recursos_curados` },
        { prompt: true, cmd: 'cat ./mission.txt' },
        { output: '> Ayudar a devs a crecer' },
        { output: '> Compartir conocimiento' },
        { output: '> // todo_es_gratis.exe' },
      ]
    : [
        { prompt: true, cmd: 'whoami' },
        { output: '> dev_content_creator' },
        { output: '> // programming + tech' },
        { prompt: true, cmd: 'ls ./guides/' },
        { output: `> ${guides.length} guides_available` },
        { output: `> ${totalResources} curated_resources` },
        { prompt: true, cmd: 'cat ./mission.txt' },
        { output: '> Help devs grow' },
        { output: '> Share knowledge' },
        { output: '> // everything_is_free.exe' },
      ]

  return (
    <div className="w-full max-w-lg overflow-hidden rounded-lg border border-border bg-card">
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-border bg-card px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#ef4444' }} />
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#eab308' }} />
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: '#22c55e' }} />
        </div>
        <span className="text-xs text-muted-foreground">~/ELIJS.DEV — ZSH</span>
        <span className="text-xs text-terminal-green">{time}</span>
      </div>

      {/* Terminal Content */}
      <div className="p-4 text-sm leading-relaxed">
        {lines.map((line, i) => (
          <div key={i} className="mb-1">
            {line.prompt ? (
              <div className="flex items-center gap-0">
                <span className="text-terminal-green">guest@elijs.dev:</span>
                <span className="text-terminal-cyan">~</span>
                <span className="text-foreground">$ </span>
                <span className="text-foreground">{line.cmd}</span>
              </div>
            ) : (
              <div className="text-muted-foreground">{line.output}</div>
            )}
          </div>
        ))}
        <div className="flex items-center gap-0 mt-2">
          <span className="text-terminal-green">guest@elijs.dev:</span>
          <span className="text-terminal-cyan">~</span>
          <span className="text-foreground">$ </span>
          <span className="animate-blink text-terminal-green">_</span>
        </div>
      </div>
    </div>
  )
}
