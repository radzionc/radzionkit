import { getErrorMessage } from '../getErrorMessage'

export const isInError = (error: unknown, ...msgs: string[]): boolean => {
  const errorMessage = getErrorMessage(error).toLowerCase()

  return msgs.some((msg) => errorMessage.includes(msg.toLowerCase()))
}
