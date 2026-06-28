import { Sparkles } from 'lucide-react'

import { NavLinkItem } from '@/components/navigation/NavLinkItem'
import { navigationItems } from '@/components/navigation/navigationItems'

export function DesktopSidebar() {
  return (
    <aside className="hidden h-screen w-72 shrink-0 border-r border-zinc-200/70 bg-white/80 px-5 py-6 backdrop-blur md:flex md:flex-col dark:border-white/10 dark:bg-zinc-950/80">
      <div className="flex items-center gap-3 px-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)] shadow-sm dark:bg-[color:var(--accent-soft-dark)] dark:text-[color:var(--accent)]">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-950 dark:text-white">Warmspace</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">Frontend scaffold</p>
        </div>
      </div>

      <nav className="compact-spacing mt-8 flex flex-1 flex-col gap-2" aria-label="Primary">
        {navigationItems.map((item) => (
          <NavLinkItem key={item.to} item={item} />
        ))}
      </nav>

      <div className="rounded-3xl border border-zinc-200/70 bg-zinc-50/80 p-4 dark:border-white/10 dark:bg-white/[0.03]">
        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Ready to grow</p>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Projects, items, and richer local data can plug into this shell without reshaping the app.
        </p>
      </div>
    </aside>
  )
}
