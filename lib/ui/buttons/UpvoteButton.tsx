import styled from 'styled-components'
import { UnstyledButton } from './UnstyledButton'
import { borderRadius } from '../css/borderRadius'
import { interactive } from '../css/interactive'
import { getColor, matchColor } from '../theme/getters'
import { transition } from '../css/transition'
import { getHoverVariant } from '../theme/getHoverVariant'
import { VStack } from '../layout/Stack'
import { IconWrapper } from '../icons/IconWrapper'
import { Text } from '../text'
import { CaretUpIcon } from '../icons/CaretUpIcon'
import { ClickableComponentProps } from '../props'

type UpvoteButtonProps = ClickableComponentProps & {
  value: boolean
  upvotes: number
}

const Cotainer = styled(UnstyledButton)<{ value: boolean }>`
  padding: 8px;
  min-width: 48px;
  ${borderRadius.s};
  border: 1px solid;
  ${interactive};

  color: ${matchColor('value', {
    true: 'primary',
    false: 'text',
  })};
  ${transition};
  &:hover {
    background: ${getColor('mist')};
    color: ${(value) =>
      value ? getHoverVariant('primary') : getColor('contrast')};
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
      <Text size={14} weight="bold">
        {upvotes}
      </Text>
    </VStack>
  </Cotainer>
)
