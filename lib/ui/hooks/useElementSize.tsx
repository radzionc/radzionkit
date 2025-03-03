import { useIsomorphicLayoutEffect } from '@lib/ui/hooks/useIsomorphicLayoutEffect'
import { debounce } from '@lib/utils/debounce'
import { Dimensions } from '@lib/utils/entities/Dimensions'
import { pick } from '@lib/utils/record/pick'
import { useState } from 'react'

const getElementSize = (element: Element): Dimensions =>
  pick(element.getBoundingClientRect(), ['height', 'width'])

export const useElementSize = <E extends Element>(element: E | null) => {
  const [size, setSize] = useState<Dimensions | null>(() =>
    element ? getElementSize(element) : null,
  )

  useIsomorphicLayoutEffect(() => {
    if (!element) return

    const handleElementChange = debounce(() => {
      setSize(getElementSize(element))
    }, 100)

    setSize(getElementSize(element))

    if (!window.ResizeObserver) return

    const resizeObserver = new ResizeObserver(handleElementChange)

    resizeObserver.observe(element)

    return () => {
      resizeObserver.disconnect()
    }
  }, [element])

  return size
}
