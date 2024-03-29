import { debounce } from '@lib/utils/debounce'
import { pick } from '@lib/utils/record/pick'
import { useState } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'

export interface ElementSize {
  width: number
  height: number
}

const getElementSize = (element: HTMLElement): ElementSize =>
  pick(element.getBoundingClientRect(), ['height', 'width'])

export const useElementSize = (element: HTMLElement | null) => {
  const [size, setSize] = useState<ElementSize | null>(() =>
    element ? getElementSize(element) : null,
  )

  useIsomorphicLayoutEffect(() => {
    if (!element) return

    const handleElementChange = debounce(() => {
      setSize(getElementSize(element))
    }, 100)

    setSize(getElementSize(element))

    if (!window?.ResizeObserver) return

    const resizeObserver = new ResizeObserver(handleElementChange)

    resizeObserver.observe(element)

    return () => {
      resizeObserver.disconnect()
    }
  }, [element])

  return size
}
