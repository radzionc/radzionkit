import { ChevronDownIcon } from '@lib/ui/icons/ChevronDownIcon'
import { ChevronRightIcon } from '@lib/ui/icons/ChevronRightIcon'
import { ChevronUpIcon } from '@lib/ui/icons/ChevronUpIcon'
import { ChevronLeftIcon } from '@lib/ui/icons/ChevronLeftIcon'
import { Text } from '@lib/ui/text'
import { getColor } from '@lib/ui/theme/getters'
import { formatDuration } from '@lib/utils/time/formatDuration'
import styled from 'styled-components'
import { Direction } from '@lib/utils/Direction'
import { Stack } from '@lib/ui/layout/Stack'
import { Minutes } from '@lib/utils/time/types'

interface TimeDistanceProps {
  value: Minutes
  direction: Direction
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

export const TimeDistance = ({ value, direction }: TimeDistanceProps) => {
  const content = (
    <Content color="supporting">{formatDuration(value, 'min')}</Content>
  )
  const contentDirection = ['up', 'down'].includes(direction) ? 'column' : 'row'
  return (
    <Container direction={contentDirection}>
      <Connector direction={contentDirection}>
        {direction === 'up' && <ChevronUpIcon />}
        {direction === 'left' && <ChevronLeftIcon />}
        <DashedLine />
      </Connector>
      {content}
      <Connector direction={contentDirection}>
        <DashedLine />
        {direction === 'down' && <ChevronDownIcon />}
        {direction === 'right' && <ChevronRightIcon />}
      </Connector>
    </Container>
  )
}
