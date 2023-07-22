import { useLayoutEffect, useState } from 'react'
import { debounce } from '../../shared/utils/debounce'
import { pick } from '../../shared/utils/pick'

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

  useLayoutEffect(() => {
    if (!element) return

    const handleElementChange = debounce(() => {
      setSize(getElementSize(element))
    }, 100)

    handleElementChange()

    if (!window?.ResizeObserver) return

    const resizeObserver = new ResizeObserver(handleElementChange)

    resizeObserver.observe(element)

    return () => {
      resizeObserver.disconnect()
    }
  }, [element])

  return size
}
