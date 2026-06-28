import { getRecord, putRecord, STORE_NAMES } from '@/db/database'
import { defaultSettings } from '@/lib/theme'
import type { AppSettings } from '@/types/settings'

const SETTINGS_KEY = 'app-settings'

export const settingsService = {
  async getSettings(): Promise<AppSettings> {
    const settings = await getRecord<AppSettings>(STORE_NAMES.settings, SETTINGS_KEY)
    return settings ?? defaultSettings
  },

  async saveSettings(settings: AppSettings) {
    await putRecord<AppSettings>(STORE_NAMES.settings, SETTINGS_KEY, settings)
    return settings
  },
}
