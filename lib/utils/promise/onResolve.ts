export const onResolve = async <T>(
  promise: Promise<T>,
  onResolve: (p: T) => void,
): Promise<T> => {
  const result = await promise
  onResolve(result)
  return result
}
