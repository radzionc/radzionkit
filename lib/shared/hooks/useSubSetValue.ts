import { useMemo, useState } from "react";

export function useSubSetValue<T>(fullSetArray: T[], initialValue: T[] = []) {
  const [value, setValue] = useState<T[]>(initialValue)

  const subSetValue = useMemo(() => {
    const fullSet = new Set(fullSetArray)
    return value.filter(value => fullSet.has(value))
  }, [fullSetArray, value])

  return [subSetValue, setValue] as const
}