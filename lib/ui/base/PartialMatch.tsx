import { ValueProp } from '@lib/utils/entities/props'
import { ReactNode } from 'react'

type PartialMatchProps<T extends string | number | symbol> = ValueProp<T> & {
  if: Partial<Record<T, () => ReactNode>>
  else?: () => ReactNode
}

export function PartialMatch<T extends string | number | symbol>(
  props: PartialMatchProps<T>,
) {
  const render = props.if[props.value]

  if (render) {
    return <>{render()}</>
  }

  if (props.else) {
    return <>{props.else()}</>
  }

  return null
}
