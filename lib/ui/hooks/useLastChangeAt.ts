import { useEffect, useRef, useState } from 'react'

export const useLastChangeAt = <T>(value: T): null | number => {
  const [lastChangeAt, setLastChangeAt] = useState<null | number>(null)

  const prevValue = useRef(value)

  useEffect(() => {
    if (prevValue.current === value) return

    setLastChangeAt(Date.now())
    prevValue.current = value
  }, [value])

  return lastChangeAt
}
