// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
) => {
  let timeoutId: ReturnType<typeof setTimeout>

  return (...args: Parameters<T>): Promise<ReturnType<T>> =>
    new Promise((resolve, reject) => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        try {
          const result = func(...args)
          resolve(result)
        } catch (error) {
          reject(error)
        }
      }, delay)
    })
}
