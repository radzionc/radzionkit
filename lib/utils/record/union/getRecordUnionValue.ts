import { getRecordKeys } from '../getRecordKeys'

type UnionValue<U> = U extends Record<string, infer V> ? V : never

export function getRecordUnionValue<U>(value: U): UnionValue<U>
export function getRecordUnionValue<U, K extends string>(
  value: U,
  key: K,
): Extract<U, Record<K, unknown>>[K]
export function getRecordUnionValue<U, K extends string>(value: U, key?: K) {
  const keys = getRecordKeys(value as Record<string, unknown>)
  const firstKey = keys[0]

  if (key === undefined) {
    return (value as any)[firstKey]
  }

  if (!keys.includes(key)) {
    throw new Error(`Key "${key}" not found in record union`)
  }

  return (value as Extract<U, Record<K, unknown>>)[key]
}
