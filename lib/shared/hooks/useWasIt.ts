import { useEffect, useState } from "react";

export function useWasIt<T>(value: T, targetValue: T) {
  const [itWas, setItWas] = useState<boolean>(value === targetValue)

  useEffect(() => {
    if (!itWas && value === targetValue) {
      setItWas(true)
    }
  }, [itWas, targetValue, value])

  return itWas
}
