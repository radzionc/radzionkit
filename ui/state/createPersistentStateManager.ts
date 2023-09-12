import { PersistentStorage } from './PersistentStorage'

export function createPersistentStateManager<T extends string>(
  storage: PersistentStorage<T>,
) {
  function managePersistentState<V>(key: T) {
    return {
      get: () => storage.getItem<V | undefined>(key),
      set: (value: V | undefined) => storage.setItem(key, value),
    }
  }

  return managePersistentState
}
