import { useEffect } from 'react'

import { applyThemeToDocument, resolveThemeMode } from '@/lib/theme'
import { useSettings } from '@/hooks/useSettings'

export function useTheme() {
  const { settings } = useSettings()

  useEffect(() => {
    applyThemeToDocument(settings)
  }, [settings])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      applyThemeToDocument(settings)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [settings])

  return {
    resolvedTheme: resolveThemeMode(settings.themeMode),
    themeMode: settings.themeMode,
    accentColour: settings.accentColour,
  }
}
