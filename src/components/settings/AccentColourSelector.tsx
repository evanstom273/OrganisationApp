import { accentOptions } from '@/lib/theme'
import { cn } from '@/lib/utils'
import type { AccentColour } from '@/types/settings'

interface AccentColourSelectorProps {
  value: AccentColour
  onChange: (value: AccentColour) => void | Promise<void>
}

export function AccentColourSelector({ value, onChange }: AccentColourSelectorProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {accentOptions.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => void onChange(option.value)}
          className={cn(
            'rounded-2xl border p-4 text-left transition',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40',
            value === option.value
              ? 'border-[color:var(--accent)]/40 bg-[color:var(--accent-soft)] dark:bg-[color:var(--accent-soft-dark)]'
              : 'border-zinc-200/70 bg-zinc-50/70 hover:border-zinc-300 dark:border-white/10 dark:bg-white/[0.03]',
          )}
        >
          <div className="flex items-center gap-3">
            <span
              className="h-4 w-4 rounded-full"
              style={{ backgroundColor: `var(--accent-palette-${option.value})` }}
              aria-hidden="true"
            />
            <span className="text-sm font-semibold text-zinc-950 dark:text-white">{option.label}</span>
          </div>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{option.description}</p>
        </button>
      ))}
    </div>
  )
}
