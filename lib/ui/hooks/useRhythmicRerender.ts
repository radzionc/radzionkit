import { useEffect, useState } from 'react'

export const useRhythmicRerender = (durationInMs = 1000) => {
  const [time, setTime] = useState<number>(Date.now())

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), durationInMs)
    return () => clearInterval(interval)
  }, [setTime, durationInMs])

  return time
}
