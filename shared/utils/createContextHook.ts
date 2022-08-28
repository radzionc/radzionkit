import { Context as ReactContext, useContext } from 'react'

export function createContextHook<T>(
  Context: ReactContext<T | undefined>,
  contextName: string
) {
  return () => {
    const context = useContext(Context)

    if (!context) {
      throw new Error(`${contextName} is not provided`)
    }

    return context
  }
}
