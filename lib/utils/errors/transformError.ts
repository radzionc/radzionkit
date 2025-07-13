import { attempt } from '../attempt'

export async function transformError<T, E = Error>(
  promise: Promise<T>,
  transform: (error: unknown) => E,
): Promise<T> {
  const result = await attempt(promise)

  if ('error' in result) {
    throw transform(result.error)
  }

  return result.data
}
