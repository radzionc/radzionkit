export const themePreferences = ['system', 'light', 'dark'] as const
export type ThemePreference = typeof themePreferences[number]
