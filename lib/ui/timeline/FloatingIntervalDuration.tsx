import { VStack } from '@lib/ui/css/stack'
import { ValueProp } from '@lib/utils/entities/props'
import { getIntervalDuration } from '@lib/utils/interval/getIntervalDuration'
import { Interval } from '@lib/utils/interval/Interval'
import { formatDuration } from '@lib/utils/time/formatDuration'
import { formatTime } from '@lib/utils/time/formatTime'
import styled from 'styled-components'

import { HStackSeparatedBy, dotSeparator } from '../layout/StackSeparatedBy'
import { UiProps } from '../props'
import { Text } from '../text'
import { getColor } from '../theme/getters'

export type FloatingIntervalDurationProps = UiProps & ValueProp<Interval>

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
        {formatDuration(getIntervalDuration(value), 'ms', { kind: 'l' })}
      </Text>
    </HStackSeparatedBy>
  </Container>
)
