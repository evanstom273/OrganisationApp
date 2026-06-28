interface ToggleRowProps {
  title: string
  description: string
  checked: boolean
  onChange: (checked: boolean) => void | Promise<void>
}

export function ToggleRow({ title, description, checked, onChange }: ToggleRowProps) {
  return (
    <label className="flex items-center justify-between gap-4 rounded-2xl border border-zinc-200/70 bg-zinc-50/70 px-4 py-4 dark:border-white/10 dark:bg-white/[0.03]">
      <div>
        <p className="text-sm font-semibold text-zinc-950 dark:text-white">{title}</p>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
      </div>

      <span className="relative inline-flex shrink-0 items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          onChange={(event) => void onChange(event.target.checked)}
        />
        <span className="h-7 w-12 rounded-full bg-zinc-300 transition peer-checked:bg-[color:var(--accent)] dark:bg-zinc-700" />
        <span className="absolute left-1 h-5 w-5 rounded-full bg-white shadow-sm transition peer-checked:translate-x-5" />
      </span>
    </label>
  )
}
