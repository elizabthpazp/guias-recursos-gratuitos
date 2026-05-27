'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypewriterProps {
  text: string
  speed?: number
  delay?: number
  className?: string
}

export function Typewriter({ text, speed = 50, delay = 300, className }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [started, setStarted] = useState(false)

  // Reset when text changes (e.g. locale switch)
  useEffect(() => {
    setDisplayedText('')
    setStarted(false)
    const startTimeout = setTimeout(() => {
      setStarted(true)
    }, delay)
    return () => clearTimeout(startTimeout)
  }, [text, delay])

  useEffect(() => {
    if (!started) return

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1))
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [displayedText, text, speed, started])

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.7,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="inline-block text-terminal-green"
      >
        _
      </motion.span>
    </span>
  )
}
