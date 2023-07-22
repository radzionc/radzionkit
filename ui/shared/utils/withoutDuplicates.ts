export function withoutDuplicates<T>(
  items: T[],
  areEqual: (a: T, b: T) => boolean = (a, b) => a === b,
): T[] {
  const result: T[] = []

  items.forEach((item) => {
    if (!result.find((i) => areEqual(i, item))) {
      result.push(item)
    }
  })

  return result
}
