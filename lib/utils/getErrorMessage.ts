import { attempt } from './attempt'

export const getErrorMessage = (err: unknown): string => {
  if (typeof err === 'string') {
    return err
  }

  if (typeof err === 'object' && err && 'message' in err) {
    return getErrorMessage(err.message)
  }

  return attempt(() => JSON.stringify(err), '')
}
