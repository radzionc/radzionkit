export function getRecord<T, V extends string | number>(
  items: T[],
  getId: (item: T) => V,
): Record<V, T> {
  const record = {} as Record<V, T>

  items.forEach((item) => {
    record[getId(item)] = item
  })

  return record
}
