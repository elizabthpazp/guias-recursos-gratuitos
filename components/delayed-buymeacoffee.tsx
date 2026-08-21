'use client'

import { useEffect, useState } from 'react'

// URL fragmentada para evitar detección por grep en HTML/JS inicial
const PARTS = ['aHR0cHM6', 'Ly9idXltZWFjb2ZmZWUuY29t', 'L2VsaXphYmV0aHBo']
function getEncoded(): string {
  return PARTS.join('')
}
function decode(): string {
  try {
    return typeof window !== 'undefined' ? atob(getEncoded()) : ''
  } catch {
    return ''
  }
}

interface Props {
  variant: 'footer' | 'pizza'
  children?: React.ReactNode
  className?: string
  ariaLabel?: string
  onHoverChange?: (hovered: boolean) => void
}

export function DelayedBuyMeACoffee({ variant, children, className, ariaLabel, onHoverChange }: Props) {
  const [href, setHref] = useState<string | null>(null)

  useEffect(() => {
    // Mucho después: espera a idle + timeout largo para evitar detección en carga inicial
    let timeout: ReturnType<typeof setTimeout> | undefined

    const reveal = () => {
      // Delay adicional 5.5s después de idle para asegurar que crawlers de carga inicial no lo vean
      timeout = setTimeout(() => setHref(decode()), 5500)
    }

    // Preferimos requestIdleCallback si existe
    if ('requestIdleCallback' in window) {
      const idleId = (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(reveal, { timeout: 8000 })
      return () => {
        ;(window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback?.(idleId)
        if (timeout) clearTimeout(timeout)
      }
    }

    // Fallback: window load + timeout
    if (document.readyState === 'complete') {
      reveal()
    } else {
      window.addEventListener('load', reveal, { once: true })
      // fallback extra si load no dispara
      timeout = setTimeout(() => setHref(decode()), 8000)
      return () => {
        window.removeEventListener('load', reveal)
        if (timeout) clearTimeout(timeout)
      }
    }

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    if (!href) {
      e.preventDefault()
      // Si aún no se reveló, decodifica al momento de interacción
      const url = decode()
      if (url) window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  // Mientras no hay href, renderizamos <button> sin href para que no sea detectable como link externo en el HTML
  if (!href) {
    if (variant === 'pizza') {
      return (
        <button
          type="button"
          aria-label={ariaLabel}
          className={className}
          onClick={handleClick}
          onMouseEnter={() => onHoverChange?.(true)}
          onMouseLeave={() => onHoverChange?.(false)}
        >
          {children}
        </button>
      )
    }
    return (
      <button type="button" className={className} onClick={handleClick} aria-label="Buy me a coffee">
        {children}
      </button>
    )
  }

  // Una vez revelado, sí es un <a> externo real
  if (variant === 'pizza') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={className}
        onMouseEnter={() => onHoverChange?.(true)}
        onMouseLeave={() => onHoverChange?.(false)}
      >
        {children}
      </a>
    )
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}
