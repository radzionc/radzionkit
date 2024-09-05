import { ReactNode, useState } from 'react'

import { ElementSize, useElementSize } from '../hooks/useElementSize'
import { useIsomorphicLayoutEffect } from 'react-use'

interface ElementSizeAwareRenderParams {
  size: ElementSize | null
  setElement: (element: HTMLElement | null) => void
}

interface Props {
  render: (params: ElementSizeAwareRenderParams) => ReactNode
  onChange?: (size: ElementSize | null) => void
}

export const ElementSizeAware = ({ render, onChange }: Props) => {
  const [element, setElement] = useState<HTMLElement | null>(null)

  const size = useElementSize(element)

  useIsomorphicLayoutEffect(() => {
    onChange?.(size)
  }, [size])

  return <>{render({ setElement, size })}</>
}
