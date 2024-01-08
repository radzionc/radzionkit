export const makeRecord = <T extends string | number, V>(
  keys: T[],
  getValue: (key: T) => V,
) => {
  const record: Record<T, V> = {} as Record<T, V>

  keys.forEach((key) => {
    record[key] = getValue(key)
  })

  return record
}
