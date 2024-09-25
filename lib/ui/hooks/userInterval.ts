import { useRef, useEffect } from 'react'

export const useInterval = (callback: () => void, interval: number) => {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    const intervalId = setInterval(() => {
      callbackRef.current()
    }, interval)

    return () => clearInterval(intervalId)
  }, [interval])
}
