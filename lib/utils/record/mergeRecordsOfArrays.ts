import { withoutDuplicates } from '../array/withoutDuplicates'

export const mergeRecordsOfArrays = <K extends string | number | symbol, T>(
  ...records: Record<K, T[]>[]
): Record<K, T[]> => {
  const allKeys = withoutDuplicates(
    records.flatMap((record) => Object.keys(record)),
  ) as K[]

  const result = {} as Record<K, T[]>
  allKeys.forEach((key) => {
    result[key] = records.flatMap((record) => record[key] ?? [])
  })

  return result
}
