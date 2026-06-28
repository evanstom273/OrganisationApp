import { AccentColourSelector } from '@/components/settings/AccentColourSelector'
import { SettingSection } from '@/components/settings/SettingSection'
import { ThemeModeSelector } from '@/components/settings/ThemeModeSelector'
import { ToggleRow } from '@/components/settings/ToggleRow'
import { useSettings } from '@/hooks/useSettings'

export default function SettingsPage() {
  const {
    settings,
    hydrated,
    setAccentColour,
    setCompactMode,
    setReducedMotion,
    setThemeMode,
  } = useSettings()

  return (
    <section className="compact-spacing mx-auto flex min-h-full w-full max-w-5xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="compact-padding rounded-[2rem] border border-zinc-200/70 bg-white/85 p-6 shadow-[0_20px_70px_-45px_rgba(24,24,27,0.35)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
        <p className="text-sm font-medium text-[color:var(--accent-strong)] dark:text-[color:var(--accent)]">
          Preferences
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">
          Settings
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          These preferences are stored locally in IndexedDB and restored after refresh.
          {!hydrated && ' Loading your saved settings now.'}
        </p>
      </div>

      <SettingSection
        title="Theme mode"
        description="Choose a fixed appearance or let the app follow your operating system preference."
      >
        <ThemeModeSelector value={settings.themeMode} onChange={setThemeMode} />
      </SettingSection>

      <SettingSection
        title="Accent colour"
        description="Add a little personality without introducing a full design system yet."
      >
        <AccentColourSelector value={settings.accentColour} onChange={setAccentColour} />
      </SettingSection>

      <SettingSection
        title="Layout and motion"
        description="Keep the shell comfortable on smaller screens and friendlier for reduced-motion preferences."
      >
        <div className="grid gap-3">
          <ToggleRow
            title="Compact mode"
            description="Tighten spacing slightly in navigation and content surfaces."
            checked={settings.compactMode}
            onChange={setCompactMode}
          />
          <ToggleRow
            title="Reduced motion"
            description="Tone down interface movement and prefer shorter, calmer transitions."
            checked={settings.reducedMotion}
            onChange={setReducedMotion}
          />
        </div>
      </SettingSection>
    </section>
  )
}
