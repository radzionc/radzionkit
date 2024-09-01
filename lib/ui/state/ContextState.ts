import { Dispatch, SetStateAction } from 'react'

export type ContextState<T> = {
  value: T
  setValue: Dispatch<SetStateAction<T>>
}
