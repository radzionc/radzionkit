import { HStack, VStack } from '@lib/ui/css/stack'
import { formatTime } from '@lib/utils/time/formatTime'
import { getHoursInRange } from '@lib/utils/time/getHoursInRange'
import { Fragment } from 'react'
import styled from 'styled-components'

import { toSizeUnit } from '../css/toSizeUnit'
import { verticalPadding } from '../css/verticalPadding'
import { PositionAbsolutelyCenterHorizontally } from '../layout/PositionAbsolutelyCenterHorizontally'
import { ChildrenProp } from '../props'
import { Text } from '../text'
import { getColor } from '../theme/getters'

interface TimeSpaceProps extends ChildrenProp {
  startsAt: number
  endsAt: number
  msToPx: (ms: number) => number
  verticalPadding?: number
}

const labelSize = 12

const Label = styled(Text)`
  font-size: ${toSizeUnit(labelSize)};
  line-height: 1;
  color: ${getColor('textSupporting')};
`

const Wrapper = styled.div<{ verticalPadding: number }>`
  ${(props) => verticalPadding(props.verticalPadding)};
  user-select: none;
`

const Container = styled.div`
  position: relative;
`

const Transparent = styled.div`
  opacity: 0;
`
const Line = styled.div`
  background: ${getColor('mistExtra')};
  height: 1px;
  width: 100%;
`

export const TimeSpace = ({
  startsAt,
  endsAt,
  msToPx,
  children,
  verticalPadding = labelSize / 2,
}: TimeSpaceProps) => {
  const height = msToPx(endsAt - startsAt)

  const marks = getHoursInRange(startsAt, endsAt)

  return (
    <Wrapper verticalPadding={verticalPadding}>
      <Container style={{ height }}>
        <HStack fullHeight gap={8}>
          <VStack style={{ position: 'relative' }} fullHeight>
            {marks.map((mark, index) => {
              const top = msToPx(mark - startsAt)

              const label = <Label>{formatTime(mark)}</Label>

              return (
                <Fragment key={index}>
                  <Transparent>{label}</Transparent>
                  <PositionAbsolutelyCenterHorizontally top={top}>
                    {label}
                  </PositionAbsolutelyCenterHorizontally>
                </Fragment>
              )
            })}
          </VStack>
          <VStack fullWidth fullHeight style={{ position: 'relative' }}>
            {marks.map((mark, index) => {
              const top = msToPx(mark - startsAt)

              return (
                <PositionAbsolutelyCenterHorizontally
                  key={index}
                  fullWidth
                  top={top}
                >
                  <Line />
                </PositionAbsolutelyCenterHorizontally>
              )
            })}
            {children}
          </VStack>
        </HStack>
      </Container>
    </Wrapper>
  )
}
