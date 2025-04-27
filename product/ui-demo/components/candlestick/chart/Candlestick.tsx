import { PriceCandle } from '@lib/trading/PriceCandle'
import { vStack } from '@lib/ui/css/stack'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { ValueProp } from '@lib/utils/entities/props'
import { toPercents } from '@lib/utils/toPercents'
import styled, { useTheme } from 'styled-components'

import { chartConfig } from './config'

type CandlestickProps = ValueProp<Omit<PriceCandle, 'startTime'>>

const Container = styled.div`
  position: relative;
  ${vStack({ alignItems: 'center', fullHeight: true })};
`

const Tail = styled.div`
  position: absolute;
  width: ${toSizeUnit(chartConfig.tailWidth)};
`

const Body = styled.div`
  position: absolute;
  width: 100%;
`

export const Candlestick = ({ value }: CandlestickProps) => {
  const { colors } = useTheme()
  const isBullish = value.close > value.open
  const background = (isBullish ? colors.success : colors.alert).toCssValue()

  return (
    <Container>
      <Tail
        style={{
          background,
          height: toPercents(value.high - value.low),
          bottom: toPercents(value.low),
        }}
      />
      <Body
        style={{
          background,
          height: toPercents(Math.abs(value.close - value.open)),
          bottom: toPercents(Math.min(value.close, value.open)),
        }}
      />
    </Container>
  )
}
