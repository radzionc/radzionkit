export const asyncAttempt = async <T>(
  func: () => Promise<T>,
  fallback: T,
): Promise<T> => {
  try {
    const result = await func()
    return result
  } catch {
    return fallback
  }
}
