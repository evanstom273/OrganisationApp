import { themeModeOptions } from '@/lib/theme'
import { cn } from '@/lib/utils'
import type { ThemeMode } from '@/types/settings'

interface ThemeModeSelectorProps {
  value: ThemeMode
  onChange: (value: ThemeMode) => void | Promise<void>
}

export function ThemeModeSelector({ value, onChange }: ThemeModeSelectorProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {themeModeOptions.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => void onChange(option.value)}
          className={cn(
            'rounded-2xl border px-4 py-4 text-left transition',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40',
            value === option.value
              ? 'border-[color:var(--accent)]/40 bg-[color:var(--accent-soft)] text-zinc-950 dark:bg-[color:var(--accent-soft-dark)] dark:text-white'
              : 'border-zinc-200/70 bg-zinc-50/70 text-zinc-700 hover:border-zinc-300 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-200',
          )}
        >
          <div className="text-sm font-semibold">{option.label}</div>
          <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{option.description}</div>
        </button>
      ))}
    </div>
  )
}
