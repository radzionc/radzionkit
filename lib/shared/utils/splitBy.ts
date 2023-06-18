export function splitBy<T>(items: T[], organize: (item: T) => 0 | 1) {
  const result: [T[], T[]] = [[], []]

  items.forEach((item) => {
    const bucket = result[organize(item)]
    bucket.push(item)
  })

  return result
}
