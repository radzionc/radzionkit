import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { createContext } from 'react'

import { ChildrenProp } from '../props'

import { createContextHook } from './createContextHook'

export function getValueProviderSetup<T>(name: string) {
  const ValueContext = createContext<T | undefined>(undefined)

  type Props = ChildrenProp & { value: T }

  const ValueProvider = ({ children, value }: Props) => {
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
