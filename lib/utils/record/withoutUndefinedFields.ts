import { getRecordKeys } from './getRecordKeys'

type WithoutUndefinedFields<T extends Record<string, any>> = {
  [K in keyof T]-?: Exclude<T[K], undefined>
}

export function withoutUndefinedFields<T extends Record<string, any>>(
  record: T,
): WithoutUndefinedFields<T> {
  const result = {} as WithoutUndefinedFields<T>

  getRecordKeys(record).forEach((key) => {
    const typedKey = key as keyof T
    const value = record[typedKey]
    if (value !== undefined) {
      result[typedKey] = value as Exclude<T[typeof typedKey], undefined>
    }
  })

  return result
}
