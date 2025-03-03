import { toPercents } from '@lib/utils/toPercents'
import styled from 'styled-components'

import { HSLA } from '../../colors/HSLA'
import { round } from '../../css/round'
import { sameDimensions } from '../../css/sameDimensions'
import { toSizeUnit } from '../../css/toSizeUnit'
import { Point } from '../../entities/Point'
import { PositionAbsolutelyByCenter } from '../../layout/PositionAbsolutelyByCenter'
import { PositionAbsolutelyCenterVertically } from '../../layout/PositionAbsolutelyCenterVertically'
import { getColor } from '../../theme/getters'

type ChartPositionProps = {
  data: number[]
  color: HSLA
  value: Point
}

const size = 12
const lineWidth = 2

const ChartPoint = styled.div`
  ${round};
  border: 2px solid ${getColor('contrast')};
  ${sameDimensions(size)};
`

const Line = styled.div`
  height: 100%;
  border-left: ${toSizeUnit(lineWidth)} dashed;
  color: ${getColor('textShy')};
`

export const LineChartPosition = ({
  data,
  color,
  value,
}: ChartPositionProps) => {
  const width = data.length - 1
  const index = Math.round(value.x * width)
  const x = index / width
  const y = data[index]

  return (
    <>
      <PositionAbsolutelyCenterVertically
        style={{
          pointerEvents: 'none',
        }}
        fullHeight
        left={toPercents(x)}
      >
        <Line />
      </PositionAbsolutelyCenterVertically>
      <PositionAbsolutelyByCenter
        style={{
          pointerEvents: 'none',
        }}
        left={toPercents(x)}
        top={toPercents(1 - y)}
      >
        <ChartPoint style={{ background: color.toCssValue() }} />
      </PositionAbsolutelyByCenter>
    </>
  )
}
