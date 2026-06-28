import { cn } from '@/lib/utils'
import { NavLinkItem } from '@/components/navigation/NavLinkItem'
import { navigationItems } from '@/components/navigation/navigationItems'

interface DesktopSidebarProps {
  mobileOpen?: boolean
  onClose?: () => void
}

export function DesktopSidebar({ mobileOpen, onClose }: DesktopSidebarProps) {
  return (
    <aside
      className={cn(
        'flex flex-col gap-[22px] overflow-y-auto',
        // Rounded floating card
        'rounded-[30px] border border-zinc-200/70 bg-white/[0.96] px-[18px] py-[22px]',
        'shadow-[0_22px_70px_rgba(0,0,0,0.1)] backdrop-blur-[20px]',
        'dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(8,17,24,0.96),rgba(5,11,16,0.92))]',
        // Desktop: sticky
        'sticky top-4 h-[calc(100vh-32px)]',
        // Mobile: fixed overlay, slide in from left
        'max-[980px]:fixed max-[980px]:left-[10px] max-[980px]:top-[10px] max-[980px]:z-[25]',
        'max-[980px]:h-[calc(100vh-20px)] max-[980px]:w-[min(84vw,320px)]',
        'max-[980px]:transition-transform max-[980px]:duration-[220ms]',
        mobileOpen
          ? 'max-[980px]:translate-x-0'
          : 'max-[980px]:-translate-x-[calc(100%+24px)]',
      )}
      aria-label="Primary navigation"
    >
      {/* Brand */}
      <div className="flex items-start gap-[14px] px-1 pt-1">
        <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[14px] border border-[rgba(121,195,168,0.22)] bg-gradient-to-b from-[rgba(106,168,146,0.12)] to-[rgba(106,168,146,0.04)] text-[var(--ws-accent-strong)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 10.5L12 4l8 6.5" />
            <path d="M6.5 9.5V19h11V9.5" />
            <path d="M10 19v-5.5h4V19" />
          </svg>
        </div>
        <div>
          <p className="text-[1.45rem] font-[650] leading-tight tracking-[-0.03em] text-zinc-950 dark:text-zinc-100">Warmspace</p>
          <p className="mt-1 text-[0.88rem] text-zinc-500 dark:text-[var(--ws-muted)]">Your space. Your chaos.</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="grid gap-2" aria-label="Primary">
        {navigationItems.map((item) => (
          <NavLinkItem key={item.to} item={item} onNavigate={onClose} />
        ))}
      </nav>

      <div className="flex-1" />

      {/* Local First status card */}
      <div className="rounded-[22px] border border-zinc-200/70 bg-zinc-50/80 p-[18px] shadow-[0_0_0_1px_rgba(123,197,169,0.06),0_12px_30px_rgba(10,24,20,0.14)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(13,24,33,0.96),rgba(10,18,25,0.92))]">
        <div className="mb-[14px] flex items-center justify-between">
          <strong className="text-[0.95rem] font-[650] text-zinc-900 dark:text-zinc-100">Local First</strong>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400 dark:text-[var(--ws-muted)]" aria-hidden="true">
            <path d="M5.5 12.5c0-4.2 2.6-7 6.5-7s6.5 2.8 6.5 7" />
            <path d="M12 11.5l5.5 8" />
            <path d="M12 11.5l-5.5 8" />
          </svg>
        </div>
        <p className="text-[0.88rem] leading-[1.55] text-zinc-500 dark:text-[var(--ws-muted)]">
          Everything lives on this device.<br />You're in control.
        </p>
        <div className="mt-[18px] flex items-center gap-2.5 text-[0.88rem] font-semibold text-[var(--ws-accent-strong)]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#78d66e] shadow-[0_0_0_4px_rgba(120,214,110,0.14)]" />
          100% Local
        </div>
      </div>
    </aside>
  )
}
