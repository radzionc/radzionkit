import { isEmpty } from '../array/isEmpty'

export const asyncFallbackChain = async <T>(
  ...functions: (() => Promise<T>)[]
): Promise<T> => {
  if (isEmpty(functions)) {
    throw new Error('No functions provided')
  }

  try {
    const result = await functions[0]()
    return result
  } catch (error) {
    if (functions.length <= 1) {
      throw error
    }

    return asyncFallbackChain(...functions.slice(1))
  }
}
