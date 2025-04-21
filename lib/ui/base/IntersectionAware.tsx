import { RenderProp } from '@lib/ui/props'
import { RefObject, useRef } from 'react'

import { useIntersection } from '../hooks/useIntersection'
import { useWasIt } from '../hooks/useWasIt'

interface RenderParams<T extends HTMLElement> {
  wasIntersected: boolean
  isIntersecting: boolean
  ref: RefObject<T | null>
}

interface Props<T extends HTMLElement> extends RenderProp<RenderParams<T>> {
  rootMargin?: string
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
