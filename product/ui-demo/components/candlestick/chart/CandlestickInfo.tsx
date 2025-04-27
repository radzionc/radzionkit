import { title } from 'process'

import {
  offset,
  shift,
  flip,
  useFloating,
  autoUpdate,
} from '@floating-ui/react'
import { PriceCandle } from '@lib/trading/PriceCandle'
import { FixedReference } from '@lib/ui/base/FixedReference'
import { borderRadius } from '@lib/ui/css/borderRadius'
import { HStack, vStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'
import { getColor } from '@lib/ui/theme/getters'
import { Point } from '@lib/utils/entities/Point'
import { ValueProp } from '@lib/utils/entities/props'
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

  ${vStack({
    gap: 1,
  })}

  min-width: 120px;

  > * {
    padding: 12px;
    background: ${getColor('foreground')};
  }
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
        <HStack alignItems="center" justifyContent="space-between" gap={20}>
          <Text weight="600" color="supporting">
            {title}
          </Text>
        </HStack>
        info will be here!
      </Container>
    </>
  )
}
