import { LocalStorage } from 'lib/state/PersistentStorage'

export enum PersistentStorageKey {
  ThemePreference = 'themePreference',
}

export const persistentStorage = new LocalStorage<PersistentStorageKey>()
