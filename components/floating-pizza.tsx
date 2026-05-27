'use client'

import { useState } from 'react'
import Link from 'next/link'

export function FloatingPizza() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href="https://buymeacoffee.com/elizabethph"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Buy me a pizza"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-terminal-green/30 bg-secondary p-3 shadow-[0_0_12px_rgba(34,197,94,0.15)] transition-all duration-300 hover:scale-105 hover:border-terminal-green/60 hover:shadow-[0_0_20px_rgba(34,197,94,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terminal-green focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-2xl leading-none" role="img" aria-hidden="true">
        🍕
      </span>
      <span
        className={`overflow-hidden whitespace-nowrap text-sm font-medium text-foreground transition-all duration-300 ${
          isHovered ? 'max-w-40 opacity-100' : 'max-w-0 opacity-0'
        }`}
      >
        Buy me a pizza
      </span>
    </Link>
  )
}
