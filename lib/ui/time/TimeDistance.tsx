import { Stack } from '@lib/ui/css/stack'
import { ChevronDownIcon } from '@lib/ui/icons/ChevronDownIcon'
import { ChevronLeftIcon } from '@lib/ui/icons/ChevronLeftIcon'
import { ChevronRightIcon } from '@lib/ui/icons/ChevronRightIcon'
import { ChevronUpIcon } from '@lib/ui/icons/ChevronUpIcon'
import { Text } from '@lib/ui/text'
import { getColor } from '@lib/ui/theme/getters'
import { Direction } from '@lib/utils/Direction'
import { formatDuration } from '@lib/utils/time/formatDuration'
import { Minutes } from '@lib/utils/time/types'
import styled from 'styled-components'

interface TimeDistanceProps {
  value: Minutes
  direction: Direction
  includePointer?: boolean
}

const DashedLine = styled.div`
  border-top: 1px dashed;
  border-left: 1px dashed;
  height: 0px;
  flex: 1;
`

const Container = styled(Stack)`
  flex: 1;
  color: ${getColor('textShy')};
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  font-size: 14px;
`

const Content = styled(Text)`
  padding: 4px;
`

const Connector = styled(Stack)`
  flex: 1;
  align-items: center;
`

export const TimeDistance = ({
  value,
  direction,
  includePointer,
}: TimeDistanceProps) => {
  const content = (
    <Content color="supporting">{formatDuration(value, 'min')}</Content>
  )
  const contentDirection = ['up', 'down'].includes(direction) ? 'column' : 'row'
  return (
    <Container direction={contentDirection}>
      <Connector direction={contentDirection}>
        {includePointer && direction === 'up' && <ChevronUpIcon />}
        {includePointer && direction === 'left' && <ChevronLeftIcon />}
        <DashedLine />
      </Connector>
      {content}
      <Connector direction={contentDirection}>
        <DashedLine />
        {includePointer && direction === 'down' && <ChevronDownIcon />}
        {includePointer && direction === 'right' && <ChevronRightIcon />}
      </Connector>
    </Container>
  )
}
