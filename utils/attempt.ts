export const attempt = <T>(func: () => T, fallback: T): T => {
  try {
    return func()
  } catch (error) {
    return fallback
  }
}
