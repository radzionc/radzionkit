import styled from 'styled-components'
import { HSLA } from '../../colors/HSLA'
import { Point } from '../../entities/Point'
import { getColor } from '../../theme/getters'
import { sameDimensions } from '../../css/sameDimensions'
import { round } from '../../css/round'
import { toPercents } from '@lib/utils/toPercents'
import { toSizeUnit } from '../../css/toSizeUnit'
import { PositionAbsolutelyCenterVertically } from '../../layout/PositionAbsolutelyCenterVertically'
import { PositionAbsolutelyByCenter } from '../../layout/PositionAbsolutelyByCenter'

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
