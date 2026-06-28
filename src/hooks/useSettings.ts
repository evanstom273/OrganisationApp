import { useEffect } from 'react'
import { create } from 'zustand'

import { defaultSettings } from '@/lib/theme'
import { settingsService } from '@/services/settingsService'
import type { AccentColour, AppSettings, ThemeMode } from '@/types/settings'

interface SettingsStore {
  settings: AppSettings
  hydrated: boolean
  hydrate: () => Promise<void>
  updateSettings: (partial: Partial<AppSettings>) => Promise<void>
  setThemeMode: (themeMode: ThemeMode) => Promise<void>
  setAccentColour: (accentColour: AccentColour) => Promise<void>
  setCompactMode: (compactMode: boolean) => Promise<void>
  setReducedMotion: (reducedMotion: boolean) => Promise<void>
}

export const useSettingsStore = create<SettingsStore>((set, get) => ({
  settings: defaultSettings,
  hydrated: false,

  hydrate: async () => {
    if (get().hydrated) {
      return
    }

    try {
      const settings = await settingsService.getSettings()
      set({ settings, hydrated: true })
    } catch (error) {
      console.error('Failed to hydrate settings from IndexedDB.', error)
      set({ settings: defaultSettings, hydrated: true })
    }
  },

  updateSettings: async (partial) => {
    const settings = { ...get().settings, ...partial }
    set({ settings })

    try {
      await settingsService.saveSettings(settings)
    } catch (error) {
      console.error('Failed to persist settings to IndexedDB.', error)
    }
  },

  setThemeMode: async (themeMode) => {
    await get().updateSettings({ themeMode })
  },

  setAccentColour: async (accentColour) => {
    await get().updateSettings({ accentColour })
  },

  setCompactMode: async (compactMode) => {
    await get().updateSettings({ compactMode })
  },

  setReducedMotion: async (reducedMotion) => {
    await get().updateSettings({ reducedMotion })
  },
}))

export function useSettings() {
  const settings = useSettingsStore((state) => state.settings)
  const hydrated = useSettingsStore((state) => state.hydrated)
  const setThemeMode = useSettingsStore((state) => state.setThemeMode)
  const setAccentColour = useSettingsStore((state) => state.setAccentColour)
  const setCompactMode = useSettingsStore((state) => state.setCompactMode)
  const setReducedMotion = useSettingsStore((state) => state.setReducedMotion)

  return {
    settings,
    hydrated,
    setThemeMode,
    setAccentColour,
    setCompactMode,
    setReducedMotion,
  }
}

export function useHydrateSettings() {
  const hydrate = useSettingsStore((state) => state.hydrate)

  useEffect(() => {
    void hydrate()
  }, [hydrate])
}
