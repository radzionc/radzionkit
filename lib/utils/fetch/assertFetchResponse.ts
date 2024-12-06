import { getErrorMessage } from '../getErrorMessage'
import { asyncFallbackChain } from '../promise/asyncFallbackChain'

export const assertFetchResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await asyncFallbackChain(
      async () => response.json(),
      async () => response.text(),
      async () => 'Unknown error',
    )
    const msg = getErrorMessage(error)

    throw new Error(msg)
  }
}
