export type ThemeMode = 'light' | 'dark' | 'system'

export type AccentColour =
  | 'amber'
  | 'coral'
  | 'rose'
  | 'violet'
  | 'sky'
  | 'emerald'

export interface AppSettings {
  themeMode: ThemeMode
  accentColour: AccentColour
  compactMode: boolean
  reducedMotion: boolean
}
