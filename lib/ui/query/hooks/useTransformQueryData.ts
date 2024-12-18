import { useMemo } from 'react'

type Query<T> = {
  data: T | undefined
}

export const useTransformQueryData = <T, V, B>(
  queryResult: B & Query<T>,
  transform: (data: T) => V,
): B & Query<V> => {
  return useMemo(() => {
    try {
      return {
        ...queryResult,
        data:
          queryResult.data !== undefined
            ? transform(queryResult.data)
            : undefined,
      } as B & Query<V>
    } catch (error) {
      return {
        ...queryResult,
        data: undefined,
        error,
      }
    }
  }, [queryResult, transform])
}
