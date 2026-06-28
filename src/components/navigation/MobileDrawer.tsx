import { useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'

import { NavLinkItem } from '@/components/navigation/NavLinkItem'
import { navigationItems } from '@/components/navigation/navigationItems'
import { cn } from '@/lib/utils'

interface MobileDrawerProps {
  open: boolean
  onClose: () => void
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const [dragOffset, setDragOffset] = useState(0)
  const startXRef = useRef<number | null>(null)
  const draggingRef = useRef(false)

  useEffect(() => {
    if (!open) {
      setDragOffset(0)
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (!open) {
    return null
  }

  const handleTouchStart = (clientX: number) => {
    startXRef.current = clientX
    draggingRef.current = true
  }

  const handleTouchMove = (clientX: number) => {
    if (!draggingRef.current || startXRef.current === null) {
      return
    }

    const delta = clientX - startXRef.current

    if (delta < 0) {
      setDragOffset(Math.max(delta, -280))
    }
  }

  const handleTouchEnd = () => {
    if (!draggingRef.current) {
      return
    }

    draggingRef.current = false

    if (dragOffset <= -72) {
      onClose()
      setDragOffset(0)
      return
    }

    setDragOffset(0)
  }

  return (
    <div className="fixed inset-0 z-50 md:hidden" aria-modal="true" role="dialog">
      <button
        type="button"
        className="absolute inset-0 bg-zinc-950/45 backdrop-blur-[2px]"
        aria-label="Close navigation menu"
        onClick={onClose}
      />

      <aside
        className={cn(
          'absolute inset-y-0 left-0 flex w-[84vw] max-w-80 flex-col border-r border-zinc-200/70 bg-white px-4 pb-5 pt-4 shadow-2xl transition-transform duration-200 dark:border-white/10 dark:bg-zinc-950',
          'touch-pan-y',
        )}
        style={{ transform: `translateX(${dragOffset}px)` }}
        onTouchStart={(event) => handleTouchStart(event.touches[0].clientX)}
        onTouchMove={(event) => handleTouchMove(event.touches[0].clientX)}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex items-center justify-between pb-4">
          <div>
            <p className="text-sm font-semibold text-zinc-950 dark:text-white">Navigation</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Swipe left or tap outside to close</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200/70 text-zinc-700 transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 dark:border-white/10 dark:text-zinc-200 dark:hover:bg-white/[0.05]"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="compact-spacing flex flex-1 flex-col gap-2 overflow-y-auto py-3" aria-label="Mobile primary">
          {navigationItems.map((item) => (
            <NavLinkItem key={item.to} item={item} onNavigate={onClose} />
          ))}
        </nav>
      </aside>
    </div>
  )
}
