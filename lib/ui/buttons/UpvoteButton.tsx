import { VStack } from '@lib/ui/css/stack'
import styled from 'styled-components'

import { borderRadius } from '../css/borderRadius'
import { interactive } from '../css/interactive'
import { CaretUpIcon } from '../icons/CaretUpIcon'
import { IconWrapper } from '../icons/IconWrapper'
import { OnClickProp } from '../props'
import { Text } from '../text'
import { getColor, matchColor } from '../theme/getters'

import { UnstyledButton } from './UnstyledButton'

type UpvoteButtonProps = OnClickProp & {
  value: boolean
  upvotes: number
}

const Cotainer = styled(UnstyledButton)<{ value: boolean }>`
  padding: 8px;
  min-width: 48px;
  ${borderRadius.s};
  border: 1px solid;
  ${interactive};

  color: ${getColor('text')};
  border-color: ${matchColor('value', {
    true: 'primary',
    false: 'text',
  })};
  svg {
    color: ${matchColor('value', {
      true: 'primary',
      false: 'text',
    })};
  }

  &:hover {
    border-color: ${getColor('primary')};
  }
`

export const UpvoteButton = ({
  value,
  upvotes,
  ...rest
}: UpvoteButtonProps) => (
  <Cotainer {...rest} value={value}>
    <VStack alignItems="center">
      <IconWrapper style={{ fontSize: 20 }}>
        <CaretUpIcon />
      </IconWrapper>
      <Text size={14} weight="600">
        {upvotes}
      </Text>
    </VStack>
  </Cotainer>
)
