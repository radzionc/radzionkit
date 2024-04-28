import { HoverTracker } from '../../base/HoverTracker'
import { HSLA } from '../../colors/HSLA'
import { LineChartPosition } from './LineChartPosition'
import { getClosestItemIndex } from '@lib/utils/math/getClosestItemIndex'
import { TakeWholeSpaceAbsolutely } from '../../css/takeWholeSpaceAbsolutely'

type LineChartPositionTrackerProps = {
  data: number[]
  color: HSLA
  onChange?: (index: number | null) => void
}

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
            <TakeWholeSpaceAbsolutely {...props} />
            {position && (
              <LineChartPosition data={data} color={color} value={position} />
            )}
          </>
        )
      }}
    />
  )
}
