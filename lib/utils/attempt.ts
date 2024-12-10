export const attempt = <T>(func: () => T, fallback: T): T => {
  try {
    return func()
  } catch {
    return fallback
  }
}
