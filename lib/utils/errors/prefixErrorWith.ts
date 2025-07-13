import { getErrorMessage } from '../getErrorMessage'

export const prefixErrorWith = (prefix: string) => (error: unknown) => {
  return new Error(`${prefix}: ${getErrorMessage(error)}`)
}
