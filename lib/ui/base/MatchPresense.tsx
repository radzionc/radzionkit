import { ReactNode } from 'react'
import { ComponentWithValueProps } from '../props'

type MatchPresenseProps<T> = ComponentWithValueProps<T | null | undefined> & {
  present: (value: T) => ReactNode
  absent: () => ReactNode
}

export function MatchPresense<T>({
  value,
  present,
  absent,
}: MatchPresenseProps<T>) {
  return <>{value ? present(value) : absent()}</>
}
