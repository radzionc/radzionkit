import { Context as ReactContext, useContext } from 'react'

export function createContextHook<T, R = T>(
  Context: ReactContext<T | undefined>,
  contextName: string,
  transform?: (context: T) => R,
): () => R {
  return (): R => {
    const context = useContext(Context)

    if (context === undefined) {
      throw new Error(`${contextName} is not provided`)
    }

    return transform ? transform(context) : (context as unknown as R)
  }
}
