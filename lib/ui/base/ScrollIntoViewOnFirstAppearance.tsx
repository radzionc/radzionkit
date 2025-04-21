import { RenderProp } from '@lib/ui/props'
import React, { useRef, useEffect, RefObject } from 'react'

type ScrollIntoViewOnFirstAppearanceProps<T extends HTMLElement> = RenderProp<{
  ref: RefObject<T | null>
}> & {
  options?: ScrollIntoViewOptions
}

export const ScrollIntoViewOnFirstAppearance = <T extends HTMLElement>({
  render,
  options = {
    behavior: 'smooth',
    block: 'nearest',
  },
}: ScrollIntoViewOnFirstAppearanceProps<T>) => {
  const element = useRef<T>(null)
  const hasScrolled = useRef(false)

  useEffect(() => {
    if (element.current && !hasScrolled.current) {
      element.current.scrollIntoView(options)
      hasScrolled.current = true
    }
  }, [options])

  return <>{render({ ref: element })}</>
}
