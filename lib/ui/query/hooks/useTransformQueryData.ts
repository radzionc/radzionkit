import { useMemo } from 'react'

type EntityWithData<T> = {
  data: T | undefined
}

export const useTransformQueryData = <T, V, B>(
  queryResult: B & EntityWithData<T>,
  transform: (data: T) => V,
): B & EntityWithData<V> => {
  return useMemo(
    () =>
      ({
        ...queryResult,
        data:
          queryResult.data !== undefined
            ? transform(queryResult.data)
            : undefined,
      }) as B & EntityWithData<V>,
    [queryResult, transform],
  )
}
