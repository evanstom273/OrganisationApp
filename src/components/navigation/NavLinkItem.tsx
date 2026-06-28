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
        'group compact-padding flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40',
        isActive
          ? 'bg-[color:var(--accent-soft)] text-[color:var(--accent-strong)] shadow-sm dark:bg-[color:var(--accent-soft-dark)] dark:text-white'
          : 'text-zinc-600 hover:bg-zinc-950/[0.04] hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/[0.06] dark:hover:text-white',
      )}
    >
      <Icon className={cn('h-4 w-4', isActive && 'text-[color:var(--accent-strong)] dark:text-[color:var(--accent)]')} />
      <span>{item.label}</span>
    </NavLink>
  )
}
