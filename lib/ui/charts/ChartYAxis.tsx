import { toPercents } from '@lib/utils/toPercents'
import { ReactNode } from 'react'
import styled from 'styled-components'

import { PositionAbsolutelyCenterHorizontally } from '../layout/PositionAbsolutelyCenterHorizontally'
import { UiProps } from '../props'

type ChartYAxisProps = UiProps & {
  data: number[]
  renderLabel: (index: number) => ReactNode
}

const Container = styled.div`
  position: relative;
`

export const ChartYAxis = ({ data, renderLabel, ...rest }: ChartYAxisProps) => {
  return (
    <Container {...rest}>
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
    </Container>
  )
}
