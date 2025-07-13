import { getErrorMessage } from '../getErrorMessage'
import { asyncFallbackChain } from '../promise/asyncFallbackChain'

export const assertFetchResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await asyncFallbackChain(
      async () => response.json(),
      async () => response.text(),
      async () =>
        `HTTP ${response.status} ${response.statusText || 'Error'}: Request failed for ${response.url}`,
    )
    const msg = getErrorMessage(error)

    throw new Error(msg)
  }
}
