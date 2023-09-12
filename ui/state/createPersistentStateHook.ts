import { OnValueChangeListener } from './PersistentStorage'
import { useCallback, useEffect, useState } from 'react'
import { PersistentStorage } from './PersistentStorage'

export function createPersistentStateHook<T extends string>(
  storage: PersistentStorage<T>,
) {
  function usePersistentState<V>(key: T, initialValue: V) {
    const [value, setValue] = useState<V>(() => {
      const valueFromStorage = storage.getItem<V>(key)

      return valueFromStorage === undefined ? initialValue : valueFromStorage
    })

    useEffect(() => {
      const onValueChange: OnValueChangeListener<V> = (newValue) => {
        setValue(newValue)
      }

      storage.addValueChangeListener(key, onValueChange)

      return () => storage.removeValueChangeListener(key, onValueChange)
    }, [key])

    const setPersistentStorageValue = useCallback(
      (newValue: V) => {
        storage.setItem(key, newValue)
      },
      [key],
    )

    return [value, setPersistentStorageValue] as const
  }

  return usePersistentState
}
