import { attempt, withFallback } from './attempt'

export const getErrorMessage = (err: unknown): string => {
  if (typeof err === 'string') {
    return err
  }

  if (typeof err === 'object' && err && 'message' in err) {
    return getErrorMessage(err.message)
  }

  return withFallback(
    attempt(() => JSON.stringify(err)),
    'Unknown error',
  )
}
