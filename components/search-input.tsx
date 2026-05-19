'use client'

import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder: string
  className?: string
}

export function SearchInput({ value, onChange, placeholder, className }: SearchInputProps) {
  return (
    <div className={cn('relative', className)}>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          'w-full rounded-md border border-border bg-input py-2 pl-10 pr-4 font-mono text-sm text-foreground placeholder:text-muted-foreground',
          'focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary',
          'transition-colors'
        )}
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          [ESC]
        </button>
      )}
    </div>
  )
}
