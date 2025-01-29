import { createPortal } from 'react-dom'
import { useBody } from '../hooks/useBody'
import { ChildrenProp } from '../props'

export function BodyPortal({ children }: ChildrenProp) {
  const body = useBody()

  if (!body) return null

  return createPortal(children, body)
}
