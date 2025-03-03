import { ReactNode } from 'react'

import { ValueProp } from '../props'

type MatchPresenseProps<T> = ValueProp<T | null | undefined> & {
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
