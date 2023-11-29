export const safeResolve = async <T>(
  promise: Promise<T>,
  fallback: T,
): Promise<T> => {
  try {
    const result = await promise
    return result
  } catch {
    return fallback
  }
}
