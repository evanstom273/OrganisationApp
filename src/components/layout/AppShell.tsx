import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { DesktopSidebar } from '@/components/navigation/DesktopSidebar'
import { MobileDrawer } from '@/components/navigation/MobileDrawer'
import { MobileTopBar } from '@/components/navigation/MobileTopBar'

export function AppShell() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileNavOpen])

  return (
    <div className="flex min-h-screen bg-[var(--app-background)] text-zinc-950 dark:text-zinc-50">
      <DesktopSidebar />

      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <MobileTopBar onOpenMenu={() => setMobileNavOpen(true)} />

        <main className="flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto">
            <Outlet />
          </div>
        </main>
      </div>

      <MobileDrawer open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </div>
  )
}
