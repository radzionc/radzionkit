import { getRecordKeys } from '../getRecordKeys'

export function getRecordUnionValue<U, K extends string>(
  value: U,
  key: K,
): Extract<U, Record<K, unknown>>[K] {
  const keys = getRecordKeys(value as Record<string, unknown>)

  if (!keys.includes(key)) {
    throw new Error(`Key "${key}" not found in record union`)
  }

  return (value as Extract<U, Record<K, unknown>>)[key]
}
