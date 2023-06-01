import { MockStorage } from 'lib/state/MockStorage'
import { LocalStorage } from 'lib/state/LocalStorage'
import { createUsePersistantStorageValueHook } from 'lib/state/createUsePersistantStorageValueHook'

export enum PersistentStorageKey {
  ThemePreference = 'themePreference',
  Promotion = 'promotion',
  ShowOnceEducation = 'showOnceEducation',
}

export const persistentStorage =
  typeof window !== 'undefined'
    ? new LocalStorage<PersistentStorageKey>()
    : new MockStorage<PersistentStorageKey>()

export const usePersistentStorageValue =
  createUsePersistantStorageValueHook<PersistentStorageKey>(persistentStorage)
