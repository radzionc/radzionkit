import { ReactNode, useState } from 'react'

import { ElementSize, useElementSize } from '../hooks/useElementSize'

interface ElementSizeAwareRenderParams {
  size: ElementSize | null
  setElement: (element: HTMLElement | null) => void
}

interface Props {
  render: (params: ElementSizeAwareRenderParams) => ReactNode
}

export const ElementSizeAware = ({ render }: Props) => {
  const [element, setElement] = useState<HTMLElement | null>(null)

  const size = useElementSize(element)

  return <>{render({ setElement, size })}</>
}
