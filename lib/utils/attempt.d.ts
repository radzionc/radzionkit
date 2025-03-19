export type Success<T> = {
  data: T
  error?: never
}
export type Failure<E = unknown> = {
  data?: never
  error: E
}
export type Result<T, E = unknown> = Success<T> | Failure<E>
export declare function attempt<T, E = unknown>(
  fn: () => Promise<T>,
): Promise<Result<T, E>>
export declare function attempt<T, E = unknown>(fn: () => T): Result<T, E>
export declare function attempt<T, E = unknown>(
  promise: Promise<T>,
): Promise<Result<T, E>>
export declare function withFallback<T, E = unknown>(
  result: Result<T, E>,
  fallback: T,
): T
export declare function withFallback<T, E = unknown>(
  result: Promise<Result<T, E>>,
  fallback: T,
): Promise<T>
