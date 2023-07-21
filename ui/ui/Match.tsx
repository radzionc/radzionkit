import { ReactNode } from "react"

type MatchProps<T extends string | number | symbol> = Record<
  T,
  () => ReactNode
> & {
  value: T
}

export function Match<T extends string | number | symbol>(
  props: MatchProps<T>
) {
  const render = props[props.value]

  return <>{render()}</>
}
