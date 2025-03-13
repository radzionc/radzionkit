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

export function attempt<T>(fn: () => Promise<T>, fallback: T): Promise<T>
export function attempt<T>(fn: () => T, fallback: T): T
export function attempt<T>(promise: Promise<T>, fallback: T): Promise<T>

export function attempt<T, E = unknown>(
  input: Promise<T> | (() => T) | (() => Promise<T>),
  fallback?: T,
): Result<T, E> | Promise<Result<T, E>> | T | Promise<T> {
  if (typeof input === 'function') {
    try {
      const result = input()
      if (result && typeof (result as any).then === 'function') {
        const promise = result as Promise<T>
        return fallback !== undefined
          ? promise.catch(() => fallback)
          : promise.then(
              (data): Result<T, E> => ({ data }),
              (error): Result<T, E> => ({ error: error as E }),
            )
      }
      return fallback !== undefined
        ? result
        : ({ data: result } as Result<T, E>)
    } catch (error) {
      return fallback !== undefined ? fallback : { error: error as E }
    }
  } else {
    return fallback !== undefined
      ? input.catch(() => fallback)
      : input.then(
          (data): Result<T, E> => ({ data }),
          (error): Result<T, E> => ({ error: error as E }),
        )
  }
}
