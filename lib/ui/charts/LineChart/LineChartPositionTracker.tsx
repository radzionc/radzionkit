import { getClosestItemIndex } from '@lib/utils/math/getClosestItemIndex'
import styled from 'styled-components'

import { HoverTracker } from '../../base/HoverTracker'
import { HSLA } from '../../colors/HSLA'
import { takeWholeSpaceAbsolutely } from '../../css/takeWholeSpaceAbsolutely'

import { LineChartPosition } from './LineChartPosition'

type LineChartPositionTrackerProps = {
  data: number[]
  color: HSLA
  onChange?: (index: number | null) => void
}

const Container = styled.div`
  ${takeWholeSpaceAbsolutely};
`

export const LineChartPositionTracker = ({
  onChange,
  data,
  color,
}: LineChartPositionTrackerProps) => {
  return (
    <HoverTracker
      onChange={({ position }) => {
        onChange?.(
          position ? getClosestItemIndex(data.length, position.x) : null,
        )
      }}
      render={({ props, position }) => {
        return (
          <>
            <Container {...props} />
            {position && (
              <LineChartPosition data={data} color={color} value={position} />
            )}
          </>
        )
      }}
    />
  )
}
