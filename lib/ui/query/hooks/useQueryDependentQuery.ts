import {
  useQueries,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

import { inactiveQuery, Query } from '../Query'

export const useQueryDependentQuery = <
  TDep,
  TQueryFnData,
  TError,
  TData = TQueryFnData,
  TQueryKey extends readonly unknown[] = readonly unknown[],
  EDep = unknown,
>(
  depQuery: Query<TDep, EDep>,
  getQuery: (
    dep: TDep,
  ) => UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
): Query<TData, EDep | TError> => {
  const shouldRunDependent =
    depQuery.data !== undefined &&
    depQuery.error === null &&
    !depQuery.isPending

  const [query] = useQueries({
    queries: [...(shouldRunDependent ? [getQuery(depQuery.data as TDep)] : [])],
  }) as UseQueryResult<TData, TError>[]

  if (depQuery.isPending) {
    return {
      data: undefined,
      error: depQuery.error as unknown as EDep | TError,
      isPending: true,
    }
  }

  if (depQuery.error !== null) {
    return {
      data: undefined,
      error: depQuery.error as unknown as EDep | TError,
      isPending: false,
    }
  }

  if (!shouldRunDependent) {
    return inactiveQuery as Query<TData, EDep | TError>
  }

  return {
    data: query.data,
    error: query.error as unknown as EDep | TError,
    isPending: query.isPending,
  }
}
