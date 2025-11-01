import { getRecordSize } from '@lib/utils/record/getRecordSize'
import { recordMap } from '@lib/utils/record/recordMap'
import { withoutUndefinedFields } from '@lib/utils/record/withoutUndefinedFields'
import { Defined } from '@lib/utils/types/Defined'
import {
  useQueries,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

import { inactiveQuery, Query } from '../Query'

type QueryErrors<T extends Record<string, Query<unknown, unknown>>> =
  T[keyof T] extends Query<any, infer E> ? E : never

export function useQueriesDependentQuery<
  T extends Record<string, Query<unknown, unknown>>,
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends readonly unknown[] = readonly unknown[],
>(
  queriesRecord: T,
  getQuery: (data: {
    [K in keyof T]: Defined<T[K]['data']>
  }) => UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
): Query<TData, QueryErrors<T> | TError> {
  const dataRecord = withoutUndefinedFields(
    recordMap(queriesRecord, ({ data }) => data),
  )

  const queries = Object.values(queriesRecord)

  const firstError = queries.find(({ error }) => error !== null)?.error ?? null
  const somePending = queries.some(({ isPending }) => isPending)

  const allHaveData = getRecordSize(dataRecord) === getRecordSize(queriesRecord)
  const shouldRunDependent = allHaveData && !somePending && firstError === null

  const [query] = useQueries({
    queries: [
      ...(shouldRunDependent
        ? [getQuery(dataRecord as { [K in keyof T]: Defined<T[K]['data']> })]
        : []),
    ],
  }) as UseQueryResult<TData, TError>[]

  if (somePending) {
    return {
      data: undefined,
      error: firstError as unknown as QueryErrors<T> | TError,
      isPending: true,
    }
  }

  if (firstError !== null) {
    return {
      data: undefined,
      error: firstError as unknown as QueryErrors<T> | TError,
      isPending: false,
    }
  }

  if (!shouldRunDependent) {
    return inactiveQuery as Query<TData, QueryErrors<T> | TError>
  }

  return {
    data: query.data,
    error: query.error as unknown as QueryErrors<T> | TError,
    isPending: query.isPending,
  }
}
