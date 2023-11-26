export function getRecord<T>(
  items: T[],
  getId: (item: T) => string,
): Record<string, T> {
  const record: Record<string, T> = {}

  items.forEach((item) => {
    record[getId(item)] = item
  })

  return record
}
