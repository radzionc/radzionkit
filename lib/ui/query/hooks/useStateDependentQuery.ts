import { areEqualRecords } from '@lib/utils/record/areEqualRecords'
import { withoutUndefinedFields } from '@lib/utils/record/withoutUndefinedFields'
import { WithoutUndefinedFields } from '@lib/utils/types/WithoutUndefinedFields'
import {
  useQueries,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

import { inactiveQuery, Query } from '../Query'

type Input<
  T extends Record<string, any>,
  TQueryFnData,
  TError,
  TData = TQueryFnData,
  TQueryKey extends readonly unknown[] = readonly unknown[],
> = {
  state: T
  getQuery: (
    state: WithoutUndefinedFields<T>,
  ) => UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>
}

export const useStateDependentQuery = <
  T extends Record<string, any>,
  TQueryFnData,
  TError,
  TData = TQueryFnData,
  TQueryKey extends readonly unknown[] = readonly unknown[],
>({
  state,
  getQuery,
}: Input<T, TQueryFnData, TError, TData, TQueryKey>): Query<TData, TError> => {
  const presentState = withoutUndefinedFields(state)

  const [query] = useQueries({
    queries: [
      ...(areEqualRecords(state, presentState) ? [getQuery(presentState)] : []),
    ],
  }) as UseQueryResult<TData, TError>[]

  return query ?? inactiveQuery
}
