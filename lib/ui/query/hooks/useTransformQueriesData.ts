import { useMemo } from 'react'

import { getRecordSize } from '../../../utils/record/getRecordSize'
import { recordMap } from '../../../utils/record/recordMap'
import { withoutUndefinedFields } from '../../../utils/record/withoutUndefinedFields'
import { NonUndefined } from '../../../utils/types/NonUndefined'
import { Query } from '../Query'

export function useTransformQueriesData<
  T extends Record<string, Query<any, E>>,
  E = unknown,
  R = unknown,
>(
  queriesRecord: T,
  transform: (data: { [K in keyof T]: NonUndefined<T[K]['data']> }) => R,
): Query<R, E> {
  return useMemo(() => {
    const dataRecord = withoutUndefinedFields(
      recordMap(queriesRecord, ({ data }) => data),
    )

    const queries = Object.values(queriesRecord)

    const error =
      Object.values(queriesRecord).find(({ error }) => error)?.error ?? null
    const isPending = queries.some(({ isPending }) => isPending)
    const isLoading = queries.some(({ isLoading }) => isLoading)

    if (getRecordSize(dataRecord) === getRecordSize(queriesRecord)) {
      try {
        return {
          data: transform(
            dataRecord as { [K in keyof T]: NonUndefined<T[K]['data']> },
          ),
          isPending,
          isLoading,
          error,
        }
      } catch (error) {
        return {
          data: undefined,
          isPending,
          isLoading,
          error: error as E,
        }
      }
    }

    return {
      data: undefined,
      error,
      isPending,
      isLoading,
    }
  }, [queriesRecord, transform])
}
