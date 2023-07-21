import { MockStorage } from '@reactkit/ui/state/MockStorage'
import { LocalStorage } from '@reactkit/ui/state/LocalStorage'
import { createUsePersistantStorageValueHook } from '@reactkit/ui/state/createUsePersistantStorageValueHook'

export enum PersistentStorageKey {
  ThemePreference = 'themePreference',
  Promotion = 'promotion',
  ShowOnceEducation = 'showOnceEducation',
  HabitsEducationWasAt = 'habitsEducationWasAt',
}

export const persistentStorage =
  typeof window !== 'undefined'
    ? new LocalStorage<PersistentStorageKey>()
    : new MockStorage<PersistentStorageKey>()

export const usePersistentStorageValue =
  createUsePersistantStorageValueHook<PersistentStorageKey>(persistentStorage)
