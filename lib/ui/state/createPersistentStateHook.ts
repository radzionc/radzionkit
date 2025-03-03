import { shouldBeDefined } from '@lib/utils/assert/shouldBeDefined'
import { useSyncExternalStore, useCallback } from 'react'

import { PersistentStorage } from './PersistentStorage'

export type NonUndefined<T> = T extends undefined ? never : T

export function createPersistentStateHook<T extends string>(
  storage: PersistentStorage<T>,
) {
  function usePersistentState<V>(
    key: T,
    initialValue: NonUndefined<V> | (() => NonUndefined<V>),
  ): [
    NonUndefined<V>,
    (
      value:
        | NonUndefined<V>
        | ((prevState: NonUndefined<V>) => NonUndefined<V>),
    ) => void,
  ] {
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
            ? (initialValue as () => NonUndefined<V>)()
            : initialValue
        storage.setItem(key, resolvedInitialValue)
        return resolvedInitialValue
      }
      return value as NonUndefined<V>
    }, [key, initialValue])

    const value = useSyncExternalStore(subscribe, getSnapshot, getSnapshot)

    const setPersistentStorageValue = useCallback(
      (
        newValue:
          | NonUndefined<V>
          | ((prevState: NonUndefined<V>) => NonUndefined<V>),
      ) => {
        const currentValue = shouldBeDefined(storage.getItem<V>(key))
        const resolvedValue =
          typeof newValue === 'function'
            ? (newValue as (prevState: NonUndefined<V>) => NonUndefined<V>)(
                currentValue as NonUndefined<V>,
              )
            : newValue
        storage.setItem(key, resolvedValue)
      },
      [key],
    )

    return [value, setPersistentStorageValue]
  }

  return usePersistentState
}
