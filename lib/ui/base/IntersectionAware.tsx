import { RefObject, useRef, ReactNode } from 'react'

import { useIntersection } from '../hooks/useIntersection'
import { useWasIt } from '../hooks/useWasIt'

interface RenderParams<T extends HTMLElement> {
  wasIntersected: boolean
  isIntersecting: boolean
  ref: RefObject<T | null>
}

interface Props<T extends HTMLElement> {
  rootMargin?: string
  render: (params: RenderParams<T>) => ReactNode
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
