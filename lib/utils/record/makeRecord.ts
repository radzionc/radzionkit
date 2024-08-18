export const makeRecord = <T extends string | number, V>(
  keys: readonly T[],
  getValue: (key: T, index: number) => V,
) => {
  const record: Record<T, V> = {} as Record<T, V>

  keys.forEach((key, index) => {
    record[key] = getValue(key, index)
  })

  return record
}
