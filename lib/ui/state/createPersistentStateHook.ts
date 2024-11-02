import { useSyncExternalStore, useCallback } from 'react'
import { PersistentStorage } from './PersistentStorage'
import { shouldBeDefined } from '@lib/utils/assert/shouldBeDefined'

export function createPersistentStateHook<T extends string>(
  storage: PersistentStorage<T>,
) {
  function usePersistentState<V>(
    key: T,
    initialValue: V | (() => V),
  ): [V, (value: V | ((prevState: V) => V)) => void] {
    const subscribe = useCallback(
      (onStoreChange: () => void) => {
        const listener = () => {
          onStoreChange()
        }
        storage.addValueChangeListener(key, listener)
        return () => {
          storage.removeValueChangeListener(key, listener)
        }
      },
      [key],
    )

    const getSnapshot = useCallback(() => {
      const value = storage.getItem<V>(key)
      if (value === undefined) {
        const resolvedInitialValue =
          typeof initialValue === 'function'
            ? (initialValue as () => V)()
            : initialValue
        storage.setItem(key, resolvedInitialValue)
        return resolvedInitialValue
      }
      return value
    }, [key, initialValue])

    const value = useSyncExternalStore(subscribe, getSnapshot, getSnapshot)

    const setPersistentStorageValue = useCallback(
      (newValue: V | ((prevState: V) => V)) => {
        const currentValue = shouldBeDefined(storage.getItem<V>(key))
        const resolvedValue =
          typeof newValue === 'function'
            ? (newValue as (prevState: V) => V)(currentValue)
            : newValue
        storage.setItem(key, resolvedValue)
      },
      [key],
    )

    return [value, setPersistentStorageValue]
  }

  return usePersistentState
}
