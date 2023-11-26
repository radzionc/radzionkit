import { useState } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'
import { areEqualRecords } from '@reactkit/utils/record/areEqualRecords'
import { pick } from '@reactkit/utils/record/pick'

export type BoundingBox = Omit<DOMRect, 'toJSON'>

const toBoundingBox = (rect: DOMRect): BoundingBox =>
  pick(rect, ['height', 'width', 'x', 'y', 'bottom', 'left', 'right', 'top'])

export const useBoundingBox = (element: HTMLElement | null) => {
  const [box, setBox] = useState<BoundingBox | null>(() =>
    element ? toBoundingBox(element.getBoundingClientRect()) : null,
  )

  useIsomorphicLayoutEffect(() => {
    if (!element) return

    const handleElementChange = () => {
      const newBox = toBoundingBox(element.getBoundingClientRect())

      if (box && areEqualRecords(newBox, box)) return

      setBox(newBox)
    }

    handleElementChange()

    if (!window?.ResizeObserver) return

    const resizeObserver = new ResizeObserver(handleElementChange)

    resizeObserver.observe(element)

    return () => {
      resizeObserver.disconnect()
    }
  }, [element])

  return box
}
