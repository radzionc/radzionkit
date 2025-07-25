import { attempt } from '@lib/utils/attempt'
import { Defined } from '@lib/utils/types/Defined'
import { useMemo } from 'react'

import { getRecordSize } from '../../../utils/record/getRecordSize'
import { recordMap } from '../../../utils/record/recordMap'
import { withoutUndefinedFields } from '../../../utils/record/withoutUndefinedFields'
import { Query } from '../Query'

export function useTransformQueriesData<
  T extends Record<string, Query<any, E>>,
  E = unknown,
  R = unknown,
>(
  queriesRecord: T,
  transform: (data: { [K in keyof T]: Defined<T[K]['data']> }) => R,
): Query<R, E> {
  return useMemo(() => {
    const dataRecord = withoutUndefinedFields(
      recordMap(queriesRecord, ({ data }) => data),
    )

    const queries = Object.values(queriesRecord)

    const error =
      Object.values(queriesRecord).find(({ error }) => error)?.error ?? null
    const isPending = queries.some(({ isPending }) => isPending)

    if (getRecordSize(dataRecord) === getRecordSize(queriesRecord)) {
      const { data, error: transformError } = attempt<R, E>(() =>
        transform(dataRecord as { [K in keyof T]: Defined<T[K]['data']> }),
      )

      return {
        isPending,
        data,
        error: transformError ?? error,
      }
    }

    return {
      data: undefined,
      error,
      isPending,
    }
  }, [queriesRecord, transform])
}
