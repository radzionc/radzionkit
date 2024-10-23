import { ReactNode } from 'react'
import { PositionAbsolutelyCenterHorizontally } from '../layout/PositionAbsolutelyCenterHorizontally'
import { toPercents } from '@lib/utils/toPercents'

type ChartYAxisProps = {
  data: number[]
  renderLabel: (index: number) => ReactNode
  expectedLabelWidth: number
}

export const ChartYAxis = ({
  data,
  expectedLabelWidth,
  renderLabel,
}: ChartYAxisProps) => {
  return (
    <div
      style={{
        minWidth: expectedLabelWidth,
        position: 'relative',
      }}
    >
      {data.map((value, index) => {
        return (
          <PositionAbsolutelyCenterHorizontally
            top={toPercents(1 - value)}
            key={index}
          >
            {renderLabel(index)}
          </PositionAbsolutelyCenterHorizontally>
        )
      })}
    </div>
  )
}
