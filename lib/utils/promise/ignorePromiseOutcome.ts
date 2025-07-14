import { attempt } from '../attempt'
import { getErrorMessage } from '../getErrorMessage'

export const ignorePromiseOutcome = async <T>(
  promise: Promise<T>,
): Promise<void> => {
  const { error } = await attempt(promise)
  if (error) {
    console.error('Ignored promise outcome:', getErrorMessage(error))
  }
}
