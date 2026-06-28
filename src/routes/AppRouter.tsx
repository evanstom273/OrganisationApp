import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AppShell } from '@/components/layout/AppShell'
import { useHydrateSettings } from '@/hooks/useSettings'
import { useTheme } from '@/hooks/useTheme'
import { appRoutes } from '@/routes/appRoutes'

export function AppRouter() {
  useHydrateSettings()
  useTheme()

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          {appRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
