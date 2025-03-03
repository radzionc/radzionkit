import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { Dispatch, SetStateAction, createContext, useState } from 'react'

import { ChildrenProp } from '../props'

import { ContextState } from './ContextState'
import { createContextHook } from './createContextHook'

export function getStateProviderSetup<T>(name: string) {
  const Context = createContext<ContextState<T> | undefined>(undefined)

  type Props = ChildrenProp & { initialValue: T }

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
