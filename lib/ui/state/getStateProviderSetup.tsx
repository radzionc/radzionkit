import { Dispatch, SetStateAction, createContext, useState } from 'react'

import { ComponentWithChildrenProps } from '../props'
import { ContextState } from './ContextState'
import { createContextHook } from './createContextHook'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'

export function getStateProviderSetup<T>(name: string) {
  const Context = createContext<ContextState<T> | undefined>(undefined)

  type Props = ComponentWithChildrenProps & { initialValue: T }

  const Provider = ({ children, initialValue }: Props) => {
    const [value, setValue] = useState(initialValue)

    return (
      <Context.Provider value={{ value, setValue }}>
        {children}
      </Context.Provider>
    )
  }

  return {
    provider: Provider,
    useState: createContextHook(
      Context,
      capitalizeFirstLetter(name),
      (result): [T, Dispatch<SetStateAction<T>>] => [
        result.value,
        result.setValue,
      ],
    ),
  }
}
