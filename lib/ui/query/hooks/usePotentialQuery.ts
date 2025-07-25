import {
  useQueries,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

import { Query } from '../Query'

export const usePotentialQuery = <
  T,
  TQueryFnData,
  TError,
  TDefaultData,
  TData = TQueryFnData,
  TQueryKey extends readonly unknown[] = readonly unknown[],
>(
  input: T | undefined,
  getQuery: (
    input: T,
  ) => UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  defaultData?: TDefaultData,
): Query<TData | TDefaultData | undefined, TError> => {
  const [query] = useQueries({
    queries: [...(input === undefined ? [] : [getQuery(input)])],
  }) as UseQueryResult<TData, TError>[]

  if (input === undefined) {
    return {
      data: defaultData,
      error: null,
      isPending: false,
    }
  }

  return query
}
