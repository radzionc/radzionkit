import { useEffect, useRef } from 'react'

export const useTimeout = (callback: () => void, timeout: number) => {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      callbackRef.current()
    }, timeout)

    return () => clearTimeout(timeoutId)
  }, [timeout])
}
