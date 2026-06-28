import { NavLink, useLocation } from 'react-router-dom'

import { cn } from '@/lib/utils'
import type { NavigationItem } from '@/types/navigation'

interface NavLinkItemProps {
  item: NavigationItem
  onNavigate?: () => void
}

export function NavLinkItem({ item, onNavigate }: NavLinkItemProps) {
  const location = useLocation()
  const isPrefixMatch = item.match === 'prefix' && location.pathname.startsWith(item.to)
  const isExactRootMatch = item.match === 'exact' && location.pathname === item.to
  const isActive = isPrefixMatch || isExactRootMatch
  const Icon = item.icon

  return (
    <NavLink
      to={item.to}
      onClick={onNavigate}
      className={cn(
        'flex items-center gap-3 rounded-2xl border px-[14px] py-3 text-[0.93rem] font-medium transition-all duration-[220ms]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ws-accent)]/40',
        isActive
          ? [
              'border-[rgba(121,195,168,0.2)] text-zinc-900',
              'bg-gradient-to-b from-[rgba(91,161,136,0.14)] to-[rgba(35,67,58,0.14)]',
              'shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_20px_rgba(14,29,25,0.12)]',
              'dark:text-zinc-100 dark:from-[rgba(91,161,136,0.2)] dark:to-[rgba(35,67,58,0.2)]',
            ]
          : [
              'border-transparent text-zinc-500',
              'hover:translate-x-[2px] hover:bg-zinc-950/[0.03] hover:text-zinc-800',
              'dark:text-[var(--ws-muted)] dark:hover:bg-white/[0.03] dark:hover:text-zinc-100',
            ],
      )}
    >
      <Icon className="h-[19px] w-[19px] shrink-0" strokeWidth={1.9} />
      <span className="flex-1">{item.label}</span>
      {item.badge != null && (
        <span className="inline-grid min-w-[22px] h-[22px] place-items-center rounded-full border border-[rgba(255,129,126,0.22)] bg-[rgba(201,83,86,0.18)] px-1.5 text-[0.74rem] font-bold text-[#ff9e9f]">
          {item.badge}
        </span>
      )}
    </NavLink>
  )
}
