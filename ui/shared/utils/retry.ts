interface RetryParams<T> {
  func: () => Promise<T>
  attempts?: number
  delay?: number
}

export async function retry<T>({
  func,
  attempts = 10,
  delay = 1000
}: RetryParams<T>): Promise<T> {
  try {
    const result = await func()
    return result
  } catch (err) {
    if (attempts === 0) {
      throw err
    }

    await new Promise(resolve => setTimeout(resolve, delay))

    return retry({
      func,
      attempts: attempts - 1,
      delay
    })
  }
}