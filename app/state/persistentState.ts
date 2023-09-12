import { TemporaryStorage } from '@reactkit/ui/state/TemporaryStorage'
import { LocalStorage } from '@reactkit/ui/state/LocalStorage'
import { createPersistentStateHook } from '@reactkit/ui/state/createPersistentStateHook'
import { createPersistentStateManager } from '@reactkit/ui/state/createPersistentStateManager'

export enum PersistentStateKey {
  ThemePreference = 'themePreference',
  Promotion = 'promotion',
  ShowOnceEducation = 'showOnceEducation',
  HabitsEducationWasAt = 'habitsEducationWasAt',
}

const persistentStorage =
  typeof window !== 'undefined'
    ? new LocalStorage<PersistentStateKey>()
    : new TemporaryStorage<PersistentStateKey>()

export const usePersistentState =
  createPersistentStateHook<PersistentStateKey>(persistentStorage)

export const managePersistentState =
  createPersistentStateManager<PersistentStateKey>(persistentStorage)
