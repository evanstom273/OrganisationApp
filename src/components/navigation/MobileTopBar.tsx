import { Menu, Sparkles } from 'lucide-react'

interface MobileTopBarProps {
  onOpenMenu: () => void
}

export function MobileTopBar({ onOpenMenu }: MobileTopBarProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-zinc-200/70 bg-white/85 px-4 py-3 backdrop-blur md:hidden dark:border-white/10 dark:bg-zinc-950/85">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)] dark:bg-[color:var(--accent-soft-dark)] dark:text-[color:var(--accent)]">
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-950 dark:text-white">Warmspace</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">Frontend scaffold</p>
        </div>
      </div>

      <button
        type="button"
        onClick={onOpenMenu}
        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200/70 text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 dark:border-white/10 dark:text-zinc-200 dark:hover:bg-white/[0.05]"
        aria-label="Open navigation menu"
      >
        <Menu className="h-5 w-5" />
      </button>
    </header>
  )
}
