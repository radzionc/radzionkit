import { OnValueChangeListener } from 'lib/state/PersistentStorage'
import { useCallback, useEffect, useState } from 'react'

import { PersistentStorageKey, persistentStorage } from './persistentStorage'

export function usePersistentStorageValue<T>(
  key: PersistentStorageKey,
  initialValue: T
) {
  const [value, setValue] = useState<T>(() => {
    const valueFromStorage = persistentStorage.getItem<T>(key)

    return valueFromStorage === undefined ? initialValue : valueFromStorage
  })

  useEffect(() => {
    const onValueChange: OnValueChangeListener<T> = (newValue) => {
      setValue(newValue)
    }

    persistentStorage.addValueChangeListener(key, onValueChange)

    return () => persistentStorage.removeValueChangeListener(key, onValueChange)
  }, [key])

  const setPersistentStorageValue = useCallback(
    (newValue: T) => {
      if (newValue !== value) {
        persistentStorage.setItem(key, newValue)
      }
    },
    [key, value]
  )

  return [value, setPersistentStorageValue] as const
}
