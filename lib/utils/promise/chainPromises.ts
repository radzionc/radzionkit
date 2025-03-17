export async function chainPromises<T>(
  generators: Iterable<() => Promise<T>>,
): Promise<T[]> {
  const results: T[] = []

  for (const generator of generators) {
    const result = await generator()
    results.push(result)
  }

  return results
}
