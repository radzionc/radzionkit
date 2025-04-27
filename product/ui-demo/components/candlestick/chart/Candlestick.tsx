import { PriceCandle } from '@lib/trading/PriceCandle'
import { vStack } from '@lib/ui/css/stack'
import { toSizeUnit } from '@lib/ui/css/toSizeUnit'
import { IsActiveProp } from '@lib/ui/props'
import { getColor } from '@lib/ui/theme/getters'
import { ValueProp } from '@lib/utils/entities/props'
import { toPercents } from '@lib/utils/toPercents'
import styled, { useTheme } from 'styled-components'

import { chartConfig } from './config'

type CandlestickProps = ValueProp<Omit<PriceCandle, 'startTime'>> & IsActiveProp

const Container = styled.div`
  position: relative;
  ${vStack({ alignItems: 'center', fullHeight: true })};

  > * {
    position: absolute;
  }
`

const Tail = styled.div`
  width: ${toSizeUnit(chartConfig.tailWidth)};
`

const Body = styled.div`
  width: 100%;
`

const Indicator = styled.div`
  width: ${toSizeUnit(chartConfig.tailWidth)};
  height: 100%;
  background: ${getColor('textShy')};
`

export const Candlestick = ({ value, isActive }: CandlestickProps) => {
  const { colors } = useTheme()
  const isBullish = value.close > value.open
  const background = (isBullish ? colors.success : colors.alert).toCssValue()

  return (
    <Container>
      {isActive && <Indicator />}
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
