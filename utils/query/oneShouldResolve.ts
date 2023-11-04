export const oneShouldResolve = async <T>(
  ...functions: (() => Promise<T>)[]
): Promise<T> => {
  try {
    const result = await functions[0]()
    return result
  } catch (error) {
    if (functions.length === 1) {
      throw error
    }

    return oneShouldResolve(...functions.slice(1))
  }
}
