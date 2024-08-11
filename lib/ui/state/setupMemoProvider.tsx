import { createContext } from 'react'
import { ComponentWithChildrenProps } from '../props'
import { createContextHook } from './createContextHook'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'

type Input<T> = {
  name: string
  useValue: () => T
}

export function setupMemoProvider<T>({ name, useValue }: Input<T>) {
  const ValueContext = createContext<T | undefined>(undefined)

  const ValueProvider = ({ children }: ComponentWithChildrenProps) => {
    const value = useValue()
    return (
      <ValueContext.Provider value={value}>{children}</ValueContext.Provider>
    )
  }

  return {
    provider: ValueProvider,
    useValue: createContextHook(
      ValueContext,
      `${capitalizeFirstLetter(name)}Context`,
    ),
  }
}
