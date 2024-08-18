export function splitBy<T>(
  items: T[],
  organize: (item: T, index: number) => 0 | 1,
) {
  const result: [T[], T[]] = [[], []]

  items.forEach((item, index) => {
    const bucket = result[organize(item, index)]
    bucket.push(item)
  })

  return result
}
