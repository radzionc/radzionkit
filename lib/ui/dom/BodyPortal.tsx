import { createPortal } from 'react-dom'
import { useBody } from '../hooks/useBody'
import { ComponentWithChildrenProps } from '../props'

export function BodyPortal({ children }: ComponentWithChildrenProps) {
  const body = useBody()

  if (!body) return null

  return createPortal(children, body)
}
