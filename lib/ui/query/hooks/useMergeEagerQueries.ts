import { isEmpty } from '@lib/utils/array/isEmpty'
import { withoutUndefined } from '@lib/utils/array/withoutUndefined'

import { EagerQuery } from '../Query'

type MergeEagerQueriesInput<T, R, E = unknown> = {
  queries: EagerQuery<T, E>[]
  joinData: (items: T[]) => R
}

export function useMergeEagerQueries<T, R, E = unknown>({
  queries,
  joinData,
}: MergeEagerQueriesInput<T, R, E>): EagerQuery<R, E> {
  const resolvedQueries = withoutUndefined(queries.map((query) => query.data))

  return {
    isPending: queries.some((query) => query.isPending),
    errors: queries.flatMap((query) => query.errors),
    data: isEmpty(resolvedQueries) ? undefined : joinData(resolvedQueries),
  }
}
