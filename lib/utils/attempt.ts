import { isPromise } from './promise/isPromise'

export type Success<T> = { data: T; error?: never }
export type Failure<E = unknown> = { data?: never; error: E }
export type Result<T, E = unknown> = Success<T> | Failure<E>

export function attempt<T, E = unknown>(
  fn: () => Promise<T>,
): Promise<Result<T, E>>
export function attempt<T, E = unknown>(fn: () => T): Result<T, E>
export function attempt<T, E = unknown>(
  promise: Promise<T>,
): Promise<Result<T, E>>
export function attempt<T, E = unknown>(
  input: Promise<T> | (() => T) | (() => Promise<T>),
): Result<T, E> | Promise<Result<T, E>> {
  if (typeof input === 'function') {
    try {
      const result = input()
      if (isPromise<T>(result)) {
        return attempt(result)
      }
      return { data: result } as Result<T, E>
    } catch (error) {
      return { error: error as E }
    }
  } else {
    return input.then(
      (data): Result<T, E> => ({ data }),
      (error): Result<T, E> => ({ error: error as E }),
    )
  }
}

export function withFallback<T, E = unknown>(
  result: Result<T, E>,
  fallback: T,
): T
export function withFallback<T, E = unknown>(
  result: Promise<Result<T, E>>,
  fallback: T,
): Promise<T>
export function withFallback<T, E = unknown>(
  result: Result<T, E> | Promise<Result<T, E>>,
  fallback: T,
): T | Promise<T> {
  if (isPromise<Result<T, E>>(result)) {
    return result.then((res): T => {
      if ('error' in res) {
        return fallback
      }
      return res.data
    })
  }

  if ('error' in result) {
    return fallback
  }

  return result.data
}
