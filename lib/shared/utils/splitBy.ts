export function splitBy<T>(items: T[], organize: (item: T) => boolean) {
  const firstBucket: T[] = []
  const secondBucket: T[] = []

  items.forEach((item) => {
    const bucket = organize(item) ? firstBucket : secondBucket
    bucket.push(item)
  })

  return [firstBucket, secondBucket]
}
