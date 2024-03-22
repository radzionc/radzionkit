import React, { useRef, useEffect, useState } from 'react'

type ScrollIntoViewOnFirstAppearanceProps<T extends HTMLElement> = {
  render: (props: { ref: React.RefObject<T> }) => React.ReactNode
}

export const ScrollIntoViewOnFirstAppearance = <T extends HTMLElement>({
  render,
}: ScrollIntoViewOnFirstAppearanceProps<T>) => {
  const ref = useRef<T>(null)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    if (ref.current && !hasScrolled) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setHasScrolled(true)
    }
  }, [hasScrolled])

  return <>{render({ ref })}</>
}
