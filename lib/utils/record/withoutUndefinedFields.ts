import { getRecordKeys } from './getRecordKeys'

export function withoutUndefinedFields<
  K extends string,
  T extends Record<K, any>,
>(record: T): Partial<T> {
  const result = {} as Partial<T>

  getRecordKeys(record).forEach((key) => {
    const value = record[key]
    if (value !== undefined) {
      result[key] = value
    }
  })

  return result
}
