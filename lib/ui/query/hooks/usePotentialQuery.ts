import {
  useQueries,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

import { Query } from '../Query'

export const usePotentialQuery = <
  T,
  TQueryFnData,
  TFallbackData extends null | undefined,
  TError,
  TData = TQueryFnData,
  TQueryKey extends readonly unknown[] = readonly unknown[],
>(
  input: T | undefined,
  getQuery: (
    input: T,
  ) => UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  fallbackData: TFallbackData = undefined as TFallbackData,
): Query<TData | TFallbackData, TError> => {
  const [query] = useQueries({
    queries: [...(input === undefined ? [] : [getQuery(input)])],
  }) as UseQueryResult<TData, TError>[]

  if (input === undefined) {
    return {
      data: fallbackData,
      error: null,
      isPending: false,
    }
  }

  return query
}
