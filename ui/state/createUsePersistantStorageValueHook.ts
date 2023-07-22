import { OnValueChangeListener } from './PersistentStorage'
import { useCallback, useEffect, useState } from 'react'
import { PersistentStorage } from './PersistentStorage'

export function createUsePersistantStorageValueHook<T extends string>(
  storage: PersistentStorage<T>,
) {
  function usePersistentStorageValue<V>(key: T, initialValue: V) {
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
        if (newValue !== value) {
          storage.setItem(key, newValue)
        }
      },
      [key, value],
    )

    return [value, setPersistentStorageValue] as const
  }

  return usePersistentStorageValue
}
