import { createPersistentStateHook } from '@lib/ui/state/createPersistentStateHook'
import { createPersistentStateManager } from '@lib/ui/state/createPersistentStateManager'
import { LocalStorage } from '@lib/ui/state/LocalStorage'
import { TemporaryStorage } from '@lib/ui/state/TemporaryStorage'

export enum PersistentStateKey {
  ThemePreference = 'themePreference',
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
