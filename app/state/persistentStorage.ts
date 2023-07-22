import { TemporaryStorage } from '@reactkit/ui/state/TemporaryStorage'
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
    : new TemporaryStorage<PersistentStorageKey>()

export const usePersistentStorageValue =
  createUsePersistantStorageValueHook<PersistentStorageKey>(persistentStorage)
