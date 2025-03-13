import { attempt } from '../attempt'

interface RetryParams<T> {
  func: () => Promise<T>
  attempts?: number
  delay?: number
  shouldRetry?: (err: unknown) => boolean
}

export async function retry<T>({
  func,
  attempts = 10,
  delay = 1000,
  shouldRetry = () => true,
}: RetryParams<T>): Promise<T> {
  const { data, error } = await attempt(func())

  if (error) {
    if (attempts === 0) {
      throw error
    }

    if (!shouldRetry(error)) {
      throw error
    }

    await new Promise((resolve) => setTimeout(resolve, delay))

    return retry({
      func,
      attempts: attempts - 1,
      delay,
    })
  }

  return data as T
}
