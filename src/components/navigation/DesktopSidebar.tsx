import { NavLinkItem } from '@/components/navigation/NavLinkItem'
import { navigationItems } from '@/components/navigation/navigationItems'

export function DesktopSidebar() {
  return (
    <aside className="hidden h-screen w-72 shrink-0 border-r border-zinc-200/70 bg-white/80 px-5 py-6 backdrop-blur md:flex md:flex-col dark:border-white/10 dark:bg-zinc-950/80">
      <div className="flex items-center gap-3 px-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--ws-accent)]/20 bg-[var(--ws-accent)]/10 text-[var(--ws-accent-strong)] shadow-sm">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 10.5L12 4l8 6.5" />
            <path d="M6.5 9.5V19h11V9.5" />
            <path d="M10 19v-5.5h4V19" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-950 dark:text-white">Warmspace</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">Your space. Your chaos.</p>
        </div>
      </div>

      <nav className="compact-spacing mt-8 flex flex-1 flex-col gap-2" aria-label="Primary">
        {navigationItems.map((item) => (
          <NavLinkItem key={item.to} item={item} />
        ))}
      </nav>

      <div className="rounded-3xl border border-zinc-200/70 bg-zinc-50/80 p-4 dark:border-white/10 dark:bg-white/[0.03]">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Local First</p>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 dark:text-zinc-500">
            <path d="M5.5 12.5c0-4.2 2.6-7 6.5-7s6.5 2.8 6.5 7" />
            <path d="M12 11.5l5.5 8" />
            <path d="M12 11.5l-5.5 8" />
          </svg>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Everything lives on this device.<br />You're in control.
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[var(--ws-accent-strong)]">
          <span className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_0_4px_rgba(74,222,128,0.14)]" />
          100% Local
        </div>
      </div>
    </aside>
  )
}
