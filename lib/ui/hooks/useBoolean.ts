import { useCallback, useState } from 'react'

export function useBoolean(initial: boolean) {
  const [value, setValue] = useState(initial)

  const set = useCallback(() => setValue(true), [])
  const unset = useCallback(() => setValue(false), [])

  const toggle = useCallback(() => setValue((old) => !old), [])

  const update = useCallback((value: boolean) => setValue(value), [])

  return [value, { set, unset, toggle, update }] as const
}
