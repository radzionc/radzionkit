import { useEffect } from 'react'

import { useUnmount } from './useUnmount'

type UseLazySyncInput<T> = {
  sync: (value: T) => void
  value?: T
  delay?: number
}

export function useLazySync<T>({ sync, value, delay }: UseLazySyncInput<T>) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (value) {
        sync(value)
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [delay, sync, value])

  useUnmount(() => {
    if (value) {
      sync(value)
    }
  })
}
