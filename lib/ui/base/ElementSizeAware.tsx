import { useIsomorphicLayoutEffect } from '@lib/ui/hooks/useIsomorphicLayoutEffect'
import { Dimensions } from '@lib/utils/entities/Dimensions'
import { ReactNode, useState } from 'react'

import { useElementSize } from '../hooks/useElementSize'

interface ElementSizeAwareRenderParams<E extends Element> {
  size: Dimensions | null
  setElement: (element: E | null) => void
}

interface Props<E extends Element> {
  render: (params: ElementSizeAwareRenderParams<E>) => ReactNode
  onChange?: (size: Dimensions | null) => void
}

export const ElementSizeAware = <E extends Element>({
  render,
  onChange,
}: Props<E>) => {
  const [element, setElement] = useState<E | null>(null)

  const size = useElementSize<E>(element)

  useIsomorphicLayoutEffect(() => {
    onChange?.(size)
  }, [size])

  return <>{render({ setElement, size })}</>
}
