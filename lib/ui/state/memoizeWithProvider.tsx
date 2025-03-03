import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'
import { Dispatch, SetStateAction, createContext } from 'react'

import { ChildrenProp } from '../props'

import { ContextState } from './ContextState'
import { createContextHook } from './createContextHook'

type MemoizeWithProviderInput<T> = {
  name: string
  useState: () => [T, Dispatch<SetStateAction<T>>]
}

export function memoizeWithProvider<T>({
  name,
  useState,
}: MemoizeWithProviderInput<T>) {
  const Context = createContext<ContextState<T> | undefined>(undefined)

  const Provider = ({ children }: ChildrenProp) => {
    const [value, setValue] = useState()

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
