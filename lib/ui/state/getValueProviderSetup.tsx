import { ChildrenProp } from '@lib/ui/props'
import { createContextHook } from '@lib/ui/state/createContextHook'
import { createContext } from 'react'

export function getValueProviderSetup<T>(contextId: string) {
  const ValueContext = createContext<T | undefined>(undefined)

  type Props = ChildrenProp & { value: T }

  const ValueProvider = ({ children, value }: Props) => {
    return (
      <ValueContext.Provider value={value}>{children}</ValueContext.Provider>
    )
  }

  return {
    provider: ValueProvider,
    useValue: createContextHook(ValueContext, contextId),
  }
}
