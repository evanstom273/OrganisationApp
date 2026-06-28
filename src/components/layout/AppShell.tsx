import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { TopBar } from '@/components/layout/TopBar'
import { DesktopSidebar } from '@/components/navigation/DesktopSidebar'

export function AppShell() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 980) setMobileNavOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {/* Mobile drawer backdrop */}
      <div
        className={`fixed inset-0 z-20 backdrop-blur-[3px] transition-opacity duration-[220ms] max-[980px]:block hidden ${mobileNavOpen ? 'bg-black/[0.42] pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        aria-hidden="true"
        onClick={() => setMobileNavOpen(false)}
      />

      {/* Shell: floating grid with margin */}
      <div className="relative z-10 mx-auto my-4 grid min-h-[calc(100vh-32px)] w-[min(1600px,calc(100%-32px))] grid-cols-[274px_1fr] gap-6 max-[980px]:my-2.5 max-[980px]:w-[min(1600px,calc(100%-20px))] max-[980px]:grid-cols-1">
        <DesktopSidebar mobileOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

        <div className="flex min-w-0 flex-col gap-[18px]">
          <TopBar onOpenMenu={() => setMobileNavOpen(true)} />
          <main className="min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  )
}
