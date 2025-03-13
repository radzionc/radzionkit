export function isPromise<T>(value: unknown): value is Promise<T> {
  return !!value && typeof (value as any).then === 'function'
}
