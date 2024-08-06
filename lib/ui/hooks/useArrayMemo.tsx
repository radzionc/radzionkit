import { useMemo, useRef } from 'react'
import { haveSameContent } from '@lib/utils/array/haveSameContent'

export const useArrayMemo = (array: any[]) => {
  const ref = useRef(array)

  return useMemo(() => {
    if (!haveSameContent(ref.current, array)) {
      ref.current = array
    }

    return ref.current
  }, [array])
}
