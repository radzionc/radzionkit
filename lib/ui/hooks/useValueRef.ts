import { useEffect, useRef } from 'react'

export function useValueRef<T>(newValue: T) {
  const ref = useRef(newValue)

  useEffect(() => {
    ref.current = newValue
  }, [newValue])

  return ref
}
