import { PersistentStorageKey } from 'state/persistentStorage'
import { usePersistentStorageValue } from 'state/usePersistentStorageValue'

import { ThemePreference } from './ThemePreference'

export const useThemePreference = () => {
  return usePersistentStorageValue<ThemePreference>(
    PersistentStorageKey.ThemePreference,
    'system'
  )
}
