import { isEmpty } from '@lib/utils/array/isEmpty'
import { without } from '@lib/utils/array/without'
import { attempt } from '@lib/utils/attempt'
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
    const errors = queries.flatMap((query) => query.error ?? [])

    if (isEmpty(queries)) {
      return {
        isPending,
        errors,
        data: joinData([]),
      }
    }

    const resolvedQueries = without(
      queries.map((query) => query.data),
      undefined,
    )

    const { data, error } = attempt<R, E>(() => joinData(resolvedQueries))

    return {
      isPending,
      errors: error ? [...errors, error] : errors,
      data,
    }
  }, [joinData, queries])
}
