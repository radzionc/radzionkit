import {
  offset,
  shift,
  flip,
  useFloating,
  autoUpdate,
} from '@floating-ui/react'
import { PriceCandle, priceCandlePriceFields } from '@lib/trading/PriceCandle'
import { FixedReference } from '@lib/ui/base/FixedReference'
import { borderRadius } from '@lib/ui/css/borderRadius'
import { HStack, vStack, VStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'
import { getColor } from '@lib/ui/theme/getters'
import { Point } from '@lib/utils/entities/Point'
import { ValueProp } from '@lib/utils/entities/props'
import { formatAmount } from '@lib/utils/formatAmount'
import { format } from 'date-fns'
import { useEffect } from 'react'
import styled from 'styled-components'

type CandlestickInfoProps = {
  position: Point
} & ValueProp<PriceCandle>

const Container = styled.div`
  border: 1px solid ${getColor('textShy')};
  background: ${getColor('foregroundExtra')};
  ${borderRadius.s};
  overflow: hidden;

  min-width: 160px;

  ${vStack({
    gap: 20,
  })}

  padding: 12px;
  background: ${getColor('foreground')};
`

export const CandlestickInfo = ({ position, value }: CandlestickInfoProps) => {
  const {
    refs: { setReference, setFloating },
    floatingStyles,
    update,
  } = useFloating({
    open: true,
    placement: 'right-start',
    strategy: 'fixed',
    middleware: [offset(16), flip(), shift()],
    whileElementsMounted: autoUpdate,
  })

  useEffect(() => {
    update()
  }, [position, update])

  return (
    <>
      <FixedReference
        ref={setReference}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
      <Container ref={setFloating} style={{ ...floatingStyles }}>
        <Text weight="600" size={16} color="supporting">
          {format(value.startTime, 'MMM d, yyyy')}
        </Text>
        <VStack gap={8}>
          {priceCandlePriceFields.map((field) => (
            <HStack alignItems="center" gap={8} key={field}>
              <Text color="supporting">{field.slice(0, 1).toUpperCase()}:</Text>
              <Text weight="600">${formatAmount(value[field])}</Text>
            </HStack>
          ))}
        </VStack>
      </Container>
    </>
  )
}
