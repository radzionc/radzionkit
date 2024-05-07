import React, { useRef, useEffect } from 'react'

type ScrollIntoViewOnFirstAppearanceProps<T extends HTMLElement> = {
  render: (props: { ref: React.RefObject<T> }) => React.ReactNode
}

export const ScrollIntoViewOnFirstAppearance = <T extends HTMLElement>({
  render,
}: ScrollIntoViewOnFirstAppearanceProps<T>) => {
  const element = useRef<T>(null)
  const hasScrolled = useRef(false)

  useEffect(() => {
    if (element.current && !hasScrolled.current) {
      element.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      hasScrolled.current = true
    }
  }, [])

  return <>{render({ ref: element })}</>
}
