import React, { useRef, useEffect } from 'react'

type ScrollIntoViewOnFirstAppearanceProps<T extends HTMLElement> = {
  render: (props: { ref: React.RefObject<T> }) => React.ReactNode
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
