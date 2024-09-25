import { useRef, useCallback } from 'react'

export function useThrottle<T extends (...args: any[]) => void>(
  callback: T,
  delay: number,
): T {
  const lastCallRef = useRef(0)

  const throttledFunction = useCallback(
    (...args: any[]) => {
      const now = Date.now()
      if (now - lastCallRef.current >= delay) {
        lastCallRef.current = now
        callback(...args)
      }
    },
    [callback, delay],
  )

  return throttledFunction as T
}
