import { useMemo } from 'react'
import { Query } from '../Query'

type QueryBase<T> = Pick<Query<T>, 'data' | 'error'>

export const useTransformQueryData = <
  TInput,
  TOutput,
  TExtra extends object = {},
>(
  queryResult: QueryBase<TInput> & TExtra,
  transform: (data: TInput) => TOutput,
): QueryBase<TOutput> & Omit<TExtra, keyof QueryBase<TOutput>> => {
  return useMemo(() => {
    try {
      return {
        ...queryResult,
        data:
          queryResult.data !== undefined
            ? transform(queryResult.data)
            : undefined,
      }
    } catch (error) {
      return {
        ...queryResult,
        data: undefined,
        error,
      }
    }
  }, [queryResult, transform])
}
