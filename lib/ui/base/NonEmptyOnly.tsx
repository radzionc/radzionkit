import { ReactNode } from 'react'
import { ComponentWithValueProps } from '../props'

type NonEmptyOnlyProps<T> = Partial<ComponentWithValueProps<T[]>> & {
  render: (array: T[]) => ReactNode
}

export function NonEmptyOnly<T>({ value, render }: NonEmptyOnlyProps<T>) {
  if (value && value.length > 0) {
    return <>{render(value)}</>
  }

  return null
}
