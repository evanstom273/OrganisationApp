import type { AccentColour, AppSettings, ThemeMode } from '@/types/settings'

export interface AccentOption {
  value: AccentColour
  label: string
  description: string
}

export const defaultSettings: AppSettings = {
  themeMode: 'system',
  accentColour: 'amber',
  compactMode: false,
  reducedMotion: false,
}

export const accentOptions: AccentOption[] = [
  { value: 'amber', label: 'Amber', description: 'Warm and calm' },
  { value: 'coral', label: 'Coral', description: 'Soft and upbeat' },
  { value: 'rose', label: 'Rose', description: 'Gentle and vivid' },
  { value: 'violet', label: 'Violet', description: 'Moody and creative' },
  { value: 'sky', label: 'Sky', description: 'Fresh and crisp' },
  { value: 'emerald', label: 'Emerald', description: 'Earthy and balanced' },
]

export const themeModeOptions: { value: ThemeMode; label: string; description: string }[] = [
  { value: 'light', label: 'Light', description: 'Always use the light theme' },
  { value: 'dark', label: 'Dark', description: 'Always use the dark theme' },
  { value: 'system', label: 'System', description: 'Follow the device preference' },
]

export function getSystemTheme(): Exclude<ThemeMode, 'system'> {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function resolveThemeMode(themeMode: ThemeMode): 'light' | 'dark' {
  return themeMode === 'system' ? getSystemTheme() : themeMode
}

export function applyThemeToDocument(settings: AppSettings) {
  const root = document.documentElement
  const resolvedTheme = resolveThemeMode(settings.themeMode)

  root.classList.toggle('dark', resolvedTheme === 'dark')
  root.dataset.themeMode = settings.themeMode
  root.dataset.accent = settings.accentColour
  root.dataset.compact = String(settings.compactMode)
  root.dataset.motion = settings.reducedMotion ? 'reduced' : 'full'
  root.style.colorScheme = resolvedTheme
}
