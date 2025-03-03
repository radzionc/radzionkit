import { toPercents } from '@lib/utils/toPercents'
import styled from 'styled-components'

import { PositionAbsolutelyCenterHorizontally } from '../layout/PositionAbsolutelyCenterHorizontally'
import { getColor } from '../theme/getters'

type ChartYAxisProps = {
  data: number[]
}

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${getColor('mist')};
  z-index: 0;
`

export const ChartHorizontalGridLines = ({ data }: ChartYAxisProps) => {
  return (
    <>
      {data.map((value, index) => {
        return (
          <PositionAbsolutelyCenterHorizontally
            top={toPercents(1 - value)}
            fullWidth
            key={index}
          >
            <Line />
          </PositionAbsolutelyCenterHorizontally>
        )
      })}
    </>
  )
}
