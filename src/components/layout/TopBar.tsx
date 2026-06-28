import { useSettings } from '@/hooks/useSettings'
import { useTheme } from '@/hooks/useTheme'

interface TopBarProps {
  onOpenMenu: () => void
}

function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 17) return 'Good afternoon'
  return 'Good evening'
}

export function TopBar({ onOpenMenu }: TopBarProps) {
  const { resolvedTheme } = useTheme()
  const { setThemeMode } = useSettings()

  function toggleTheme() {
    setThemeMode(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-[26px] border border-zinc-200/70 bg-white/[0.88] px-[18px] py-[14px] shadow-[0_0_0_1px_rgba(123,197,169,0.06),0_12px_30px_rgba(10,24,20,0.28)] backdrop-blur-[18px] transition-colors dark:border-white/10 dark:bg-[rgba(7,13,20,0.88)]">
      {/* Search wrap */}
      <div className="flex h-[54px] min-w-0 items-center gap-3 rounded-[18px] border border-zinc-200/70 bg-zinc-50/90 px-[14px] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] dark:border-white/10 dark:bg-[rgba(16,28,38,0.9)]">
        <MobileMenuButton onClick={onOpenMenu} />
        <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-zinc-400 dark:text-zinc-500" aria-hidden="true">
          <circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" />
        </svg>
        <input
          type="search"
          placeholder="Search thoughts, projects, tags…"
          aria-label="Search thoughts, projects, tags"
          className="min-w-0 flex-1 border-0 bg-transparent text-[0.99rem] text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-zinc-100 dark:placeholder:text-zinc-500"
        />
        <span className="shrink-0 rounded-[10px] border border-zinc-200/70 bg-white/60 px-2 py-1 text-xs tracking-[0.04em] text-zinc-400 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-500">
          ⌘ K
        </span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2.5 whitespace-nowrap text-[0.96rem] text-zinc-900 dark:text-zinc-100">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="#e0b16f" stroke="none" aria-hidden="true">
            <path d="M12 2.5l1.4 4.3 4.6-.1-3.7 2.8 1.4 4.1-3.7-2.5-3.7 2.5 1.4-4.1-3.7-2.8 4.6.1z" />
          </svg>
          <span className="hidden sm:inline">{getGreeting()}, Lyra ✨</span>
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-[15px] border border-zinc-200/70 bg-zinc-50/80 text-zinc-500 transition hover:-translate-y-px hover:border-zinc-300 hover:text-zinc-900 dark:border-white/10 dark:bg-white/[0.06] dark:text-zinc-400 dark:hover:text-zinc-100"
          aria-label="Toggle theme"
        >
          <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 14.5A6.5 6.5 0 1 1 9.5 6 5.5 5.5 0 0 0 18 14.5z" />
          </svg>
        </button>

        <button
          type="button"
          className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-[15px] border border-zinc-200/70 bg-zinc-50/80 text-zinc-500 transition hover:-translate-y-px hover:border-zinc-300 hover:text-zinc-900 dark:border-white/10 dark:bg-white/[0.06] dark:text-zinc-400 dark:hover:text-zinc-100"
          aria-label="More options"
        >
          <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
            <circle cx="6" cy="12" r="1.4" fill="currentColor" />
            <circle cx="12" cy="12" r="1.4" fill="currentColor" />
            <circle cx="18" cy="12" r="1.4" fill="currentColor" />
          </svg>
        </button>

        <button
          type="button"
          className="inline-grid h-[46px] w-[46px] shrink-0 place-items-center rounded-full border border-[rgba(162,137,217,0.22)] bg-gradient-to-br from-[rgba(149,126,221,0.72)] to-[rgba(74,51,110,0.96)] text-sm font-bold tracking-[0.04em] text-[#f8f2ff] shadow-[0_8px_26px_rgba(54,33,86,0.3)] transition hover:-translate-y-px"
          aria-label="Profile"
        >
          LY
        </button>
      </div>
    </header>
  )
}

function MobileMenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="hidden max-[980px]:inline-grid h-11 w-11 shrink-0 place-items-center rounded-[15px] border border-zinc-200/70 bg-zinc-100/80 text-zinc-500 transition hover:text-zinc-900 dark:border-white/10 dark:bg-white/[0.07] dark:text-zinc-400 dark:hover:text-zinc-100"
      aria-label="Open menu"
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" />
      </svg>
    </button>
  )
}
