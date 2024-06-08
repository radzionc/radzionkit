import { sleep } from './sleep'

type Func = (...args: any[]) => Promise<any>

interface Input<V extends Func> {
  delay: number
  func: V
}

export const makeFunctionRateLimitProtected = <V extends Func>({
  delay,
  func,
}: Input<V>): V => {
  let lastCalledAt: number | undefined = undefined

  const rateLimitProtectedFunc: V = (async (...args: any[]) => {
    const now = Date.now()

    if (lastCalledAt && now - lastCalledAt < delay) {
      await sleep(delay - (now - lastCalledAt))
      return rateLimitProtectedFunc(...args)
    }

    lastCalledAt = Date.now()

    return func(...args)
  }) as V

  return rateLimitProtectedFunc
}
