import { isEmpty } from '../array/isEmpty'
import { attempt } from '../attempt'

export const asyncFallbackChain = async <T>(
  ...functions: (() => Promise<T>)[]
): Promise<T> => {
  if (isEmpty(functions)) {
    throw new Error('No functions provided')
  }

  const { data, error } = await attempt(functions[0]())

  if (error) {
    if (functions.length <= 1) {
      throw error
    }

    return asyncFallbackChain(...functions.slice(1))
  }

  return data as T
}
