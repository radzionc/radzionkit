export async function chainPromises<T>(
  iterable: Iterable<Promise<T> | T>,
): Promise<T[]> {
  const results: T[] = []

  for (const item of iterable) {
    const result = await item
    results.push(result)
  }

  return results
}
