import { ReactNode } from 'react'

interface NonEmptyOnlyProps<T> {
  array?: T[]
  render: (array: T[]) => ReactNode
}

export function NonEmptyOnly<T>({ array, render }: NonEmptyOnlyProps<T>) {
  if (array && array.length > 0) {
    return <>{render(array)}</>
  }

  return null
}
