import styled from 'styled-components'
import { VStack } from '@lib/ui/css/stack'
import { getColor } from '../theme/getters'
import { ComponentWithValueProps, UIComponentProps } from '../props'
import { HStackSeparatedBy, dotSeparator } from '../layout/StackSeparatedBy'
import { Text } from '../text'
import { formatTime } from '@lib/utils/time/formatTime'
import { Interval } from '@lib/utils/interval/Interval'
import { formatDuration } from '@lib/utils/time/formatDuration'
import { getIntervalDuration } from '@lib/utils/interval/getIntervalDuration'

export type FloatingIntervalDurationProps = UIComponentProps &
  ComponentWithValueProps<Interval>

const Container = styled(VStack)`
  position: absolute;
  width: 100%;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: ${getColor('contrast')};
  pointer-events: none;
`

export const FloatingIntervalDuration = ({
  value,
  ...rest
}: FloatingIntervalDurationProps) => (
  <Container as="div" {...rest}>
    <HStackSeparatedBy wrap="nowrap" separator={dotSeparator} gap={8}>
      <Text nowrap>
        {formatTime(value.start)} - {formatTime(value.end)}
      </Text>
      <Text nowrap>
        {formatDuration(getIntervalDuration(value), 'ms', { kind: 'long' })}
      </Text>
    </HStackSeparatedBy>
  </Container>
)
