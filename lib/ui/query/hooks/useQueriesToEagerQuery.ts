import { isEmpty } from '@lib/utils/array/isEmpty'
import { withoutUndefined } from '@lib/utils/array/withoutUndefined'
import { useMemo } from 'react'

import { EagerQuery, Query } from '../Query'

type ToEagerQueryInput<T, R, E = unknown> = {
  queries: Query<T, E>[]
  joinData: (items: T[]) => R
}

export function useQueriesToEagerQuery<T, R, E = unknown>({
  queries,
  joinData,
}: ToEagerQueryInput<T, R, E>): EagerQuery<R, E> {
  return useMemo(() => {
    const isPending = queries.some((query) => query.isPending)
    const isLoading = queries.some((query) => query.isLoading)
    const errors = queries.flatMap((query) => query.error ?? [])

    if (isEmpty(queries)) {
      return {
        isPending,
        isLoading,
        errors,
        data: joinData([]),
      }
    }

    try {
      const resolvedQueries = withoutUndefined(
        queries.map((query) => query.data),
      )
      return {
        isPending,
        isLoading,
        errors,
        data: isEmpty(resolvedQueries) ? undefined : joinData(resolvedQueries),
      }
    } catch (error: any) {
      return {
        isPending,
        isLoading,
        errors: [...errors, error],
        data: undefined,
      }
    }
  }, [joinData, queries])
}
