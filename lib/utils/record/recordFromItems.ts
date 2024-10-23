export function recordFromItems<T, K extends string | number>(
  items: readonly T[],
  getKey: (item: T) => K,
): Record<K, T> {
  const record = {} as Record<K, T>

  items.forEach((item) => {
    record[getKey(item)] = item
  })

  return record
}
