import { OnValueChangeListener } from './PersistentStorage'
import { useCallback, useEffect, useState } from 'react'
import { PersistentStorage } from './PersistentStorage'
import { shouldBeDefined } from '@lib/utils/assert/shouldBeDefined'

export function createPersistentStateHook<T extends string>(
  storage: PersistentStorage<T>,
) {
  function usePersistentState<V>(key: T, initialValue: Exclude<V, undefined>) {
    const [value, setValue] = useState<V>(() => {
      if (storage.getItem<V>(key) === undefined) {
        storage.setItem(key, initialValue)
      }

      return shouldBeDefined(storage.getItem<V>(key))
    })

    useEffect(() => {
      const onValueChange: OnValueChangeListener<Exclude<V, undefined>> = (
        newValue,
      ) => {
        setValue(newValue)
      }

      storage.addValueChangeListener(key, onValueChange)

      return () => storage.removeValueChangeListener(key, onValueChange)
    }, [key])

    const setPersistentStorageValue = useCallback(
      (
        newValue:
          | Exclude<V, undefined>
          | ((prevState: Exclude<V, undefined>) => Exclude<V, undefined>),
      ) => {
        const resolvedValue =
          typeof newValue === 'function'
            ? (
                newValue as (
                  prevState: Exclude<V, undefined>,
                ) => Exclude<V, undefined>
              )(shouldBeDefined(storage.getItem<Exclude<V, undefined>>(key)))
            : newValue
        storage.setItem(key, resolvedValue)
      },
      [key],
    )

    return [value, setPersistentStorageValue] as const
  }

  return usePersistentState
}
