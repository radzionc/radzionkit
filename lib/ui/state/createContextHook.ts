import { Context as ReactContext, useContext } from 'react'

import { NoContextError } from './NoContextError'

export function createContextHook<T, R = T>(
  Context: ReactContext<T | undefined>,
  contextId: string,
  transform?: (context: T) => R,
): () => R {
  return (): R => {
    const context = useContext(Context)

    if (context === undefined) {
      throw new NoContextError(contextId)
    }

    return transform ? transform(context) : (context as unknown as R)
  }
}
