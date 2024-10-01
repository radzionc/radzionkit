import { ReactNode, useState } from 'react'

import { useElementSize } from '../hooks/useElementSize'
import { useIsomorphicLayoutEffect } from '@lib/ui/hooks/useIsomorphicLayoutEffect'
import { Dimensions } from '@lib/utils/entities/Dimensions'

interface ElementSizeAwareRenderParams {
  size: Dimensions | null
  setElement: (element: HTMLElement | null) => void
}

interface Props {
  render: (params: ElementSizeAwareRenderParams) => ReactNode
  onChange?: (size: Dimensions | null) => void
}

export const ElementSizeAware = ({ render, onChange }: Props) => {
  const [element, setElement] = useState<HTMLElement | null>(null)

  const size = useElementSize(element)

  useIsomorphicLayoutEffect(() => {
    onChange?.(size)
  }, [size])

  return <>{render({ setElement, size })}</>
}
