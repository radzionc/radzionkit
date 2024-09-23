import { Dispatch, SetStateAction, createContext } from 'react'

import { ComponentWithChildrenProps } from '../props'
import { ContextState } from './ContextState'
import { createContextHook } from './createContextHook'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'

type MemoizeWithProviderInput<T> = {
  name: string
  useState: () => [T, Dispatch<SetStateAction<T>>]
}

export function memoizeWithProvider<T>({
  name,
  useState,
}: MemoizeWithProviderInput<T>) {
  const Context = createContext<ContextState<T> | undefined>(undefined)

  const Provider = ({ children }: ComponentWithChildrenProps) => {
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
