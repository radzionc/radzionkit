import { attempt } from '@lib/utils/attempt'
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
    const initialData = queryResult.data
    if (initialData === undefined) {
      return {
        ...queryResult,
        data: undefined,
      }
    }

    const { data, error } = attempt<TOutput>(() => transform(initialData))

    return {
      ...queryResult,
      data,
      error,
    }
  }, [queryResult, transform])
}
