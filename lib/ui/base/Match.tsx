import { ReactNode } from 'react'

import { ValueProp } from '../props'

type MatchProps<T extends string | number | symbol> = Record<
  T,
  () => ReactNode
> &
  ValueProp<T>

export function Match<T extends string | number | symbol>(
  props: MatchProps<T>,
) {
  const render = props[props.value]

  return <>{render()}</>
}
