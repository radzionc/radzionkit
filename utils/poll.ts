import { sleep } from './sleep'

interface PollParams<T> {
  func: () => Promise<T>
  delay?: number
  shouldStop: (result: T) => boolean
}

export async function poll<T>({
  func,
  delay = 1000,
  shouldStop,
}: PollParams<T>): Promise<T> {
  const result = await func()
  if (shouldStop(result)) {
    return result
  }

  await sleep(delay)

  return poll({
    func,
    delay,
    shouldStop,
  })
}
