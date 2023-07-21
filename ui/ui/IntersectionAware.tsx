import { useWasIt } from 'shared/hooks/useWasIt'
import { RefObject, useRef } from 'react'
import { useIntersection } from 'react-use'

interface RenderParams<T extends HTMLElement> {
  wasIntersected: boolean
  isIntersecting: boolean
  ref: RefObject<T>
}

interface Props<T extends HTMLElement> {
  rootMargin?: string
  render: (params: RenderParams<T>) => void
}

export function IntersectionAware<T extends HTMLElement>({
  render,
  rootMargin = '1000px',
}: Props<T>) {
  const ref = useRef<T>(null)
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin,
    threshold: 0,
  })

  const isIntersecting = !!intersection?.isIntersecting
  const wasIntersected = useWasIt(intersection?.isIntersecting, true)

  return <>{render({ ref, isIntersecting, wasIntersected })}</>
}
