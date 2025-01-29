import { ReactNode } from 'react'
import { ChildrenProp } from '../props'

type WrapProps = ChildrenProp & {
  wrap?: (children: ReactNode) => ReactNode
}

export const Wrap = ({ children, wrap }: WrapProps) => {
  return wrap ? wrap(children) : children
}
