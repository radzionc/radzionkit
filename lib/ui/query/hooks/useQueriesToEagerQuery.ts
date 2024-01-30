import { UseQueryResult } from '@tanstack/react-query'
import { EagerQuery } from '../EagerQuery'
import { withoutUndefined } from '@lib/utils/array/withoutUndefined'
import { isEmpty } from '@lib/utils/array/isEmpty'

type ToEagerQueryInput<T, R, E = unknown> = {
  queries: UseQueryResult<T, E>[]
  joinData: (items: T[]) => R
}

export function useQueriesToEagerQuery<T, R, E = unknown>({
  queries,
  joinData,
}: ToEagerQueryInput<T, R, E>): EagerQuery<R, E> {
  const resolvedQueries = withoutUndefined(queries.map((query) => query.data))
  return {
    isPending: queries.some((query) => query.isPending),
    errors: queries.flatMap((query) => query.error ?? []),
    data: isEmpty(resolvedQueries) ? undefined : joinData(resolvedQueries),
  }
}
