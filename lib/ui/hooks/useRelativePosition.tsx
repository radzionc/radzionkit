import { enforceRange } from '@lib/utils/enforceRange'
import { useMemo } from 'react'

import { Point } from '../entities/Point'

import { BoundingBox } from './useBoundingBox'

type UseRelativePositionParams = {
  box: BoundingBox | null
  clientPosition: Point | null
}

export const useRelativePosition = ({
  box,
  clientPosition,
}: UseRelativePositionParams) => {
  return useMemo(() => {
    if (!clientPosition || !box) return null

    const { left, top, width, height } = box
    const { x, y } = clientPosition

    return {
      x: enforceRange((x - left) / width, 0, 1),
      y: enforceRange((y - top) / height, 0, 1),
    }
  }, [box, clientPosition])
}
