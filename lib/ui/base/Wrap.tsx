import { ReactNode } from 'react'
import { ComponentWithChildrenProps } from '../props'

type WrapProps = ComponentWithChildrenProps & {
  wrap?: (children: ReactNode) => ReactNode
}

export const Wrap = ({ children, wrap }: WrapProps) => {
  return wrap ? wrap(children) : children
}
