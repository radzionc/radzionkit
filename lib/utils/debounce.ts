import { attempt } from './attempt'

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number,
) => {
  let timeoutId: ReturnType<typeof setTimeout>

  return (...args: Parameters<T>): Promise<ReturnType<T>> =>
    new Promise((resolve, reject) => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        const { data, error } = attempt(() => func(...args))
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      }, delay)
    })
}
