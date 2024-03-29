import { ReactNode } from 'react'

interface BasedOnNumberProps {
  lessOrEqual: () => ReactNode
  more: () => ReactNode
  value: number
  compareTo: number
}

export const BasedOnNumber = ({
  lessOrEqual,
  more,
  value,
  compareTo,
}: BasedOnNumberProps) => {
  return <>{(value <= compareTo ? lessOrEqual : more)()}</>
}
