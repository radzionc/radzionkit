import { useMemo } from 'react'
import { UseQueryResult } from '@tanstack/react-query'

export const useTransformQueryData = <T, V>(
  queryResult: UseQueryResult<T>,
  transform: (data: T) => V,
): UseQueryResult<V> => {
  return useMemo(
    () =>
      ({
        ...queryResult,
        data:
          queryResult.data !== undefined
            ? transform(queryResult.data)
            : undefined,
      }) as UseQueryResult<V>,
    [queryResult, transform],
  )
}
