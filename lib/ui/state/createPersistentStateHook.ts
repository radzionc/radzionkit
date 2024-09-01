import { OnValueChangeListener } from './PersistentStorage'
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { PersistentStorage } from './PersistentStorage'
import { shouldBeDefined } from '@lib/utils/assert/shouldBeDefined'

export function createPersistentStateHook<T extends string>(
  storage: PersistentStorage<T>,
) {
  function usePersistentState<V>(
    key: T,
    initialValue: V | (() => V),
  ): [V, Dispatch<SetStateAction<Exclude<V, undefined>>>] {
    const [value, setValue] = useState<V>(() => {
      const storedValue = storage.getItem<V>(key)

      if (storedValue === undefined) {
        // If initialValue is a function, invoke it to get the value
        const resolvedInitialValue =
          typeof initialValue === 'function'
            ? (initialValue as () => V)()
            : initialValue
        storage.setItem(key, resolvedInitialValue)

        return resolvedInitialValue
      }

      return storedValue
    })

    useEffect(() => {
      const onValueChange: OnValueChangeListener<Exclude<V, undefined>> = (
        newValue,
      ) => {
        setValue(newValue)
      }

      storage.addValueChangeListener(key, onValueChange)

      const handleStorageChange = (event: StorageEvent) => {
        if (event.key !== key) return

        const newValue = storage.getItem<V>(key)
        if (newValue !== undefined) {
          setValue(newValue)
        }
      }

      window.addEventListener('storage', handleStorageChange)

      return () => {
        storage.removeValueChangeListener(key, onValueChange)
        window.removeEventListener('storage', handleStorageChange)
      }
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

    return [value, setPersistentStorageValue]
  }

  return usePersistentState
}
