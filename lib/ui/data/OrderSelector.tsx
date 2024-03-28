import { Order } from '@lib/utils/order/Order'
import { InputProps } from '../props'
import { ReactNode } from 'react'
import styled from 'styled-components'
import { borderRadius } from '../css/borderRadius'
import { getColor } from '../theme/getters'
import { transition } from '../css/transition'
import { getHoverVariant } from '../theme/getHoverVariant'
import { UnstyledButton } from '../buttons/UnstyledButton'
import { IconWrapper } from '../icons/IconWrapper'
import { Text } from '../text'
import { CollapsableStateIndicator } from '../layout/CollapsableStateIndicator'

type OrderSelectorProps = InputProps<Order> & {
  name: ReactNode
  icon?: ReactNode
}

const Container = styled(UnstyledButton)`
  display: flex;
  align-items: center;
  gap: 8px;
  ${borderRadius.s};
  padding: 8px;
  background: ${getColor('foreground')};
  ${transition};

  svg {
    color: ${getColor('textShy')};
    font-size: 18px;
    ${transition};
  }

  color: ${getColor('textSupporting')};
  font-size: 14px;

  &:hover {
    background: ${getHoverVariant('foreground')};
    color: ${getColor('text')};
    svg {
      color: ${getColor('text')};
    }
  }
`

export const OrderSelector = ({
  value,
  onChange,
  icon,
  name,
}: OrderSelectorProps) => (
  <Container onClick={() => onChange(value === 'asc' ? 'desc' : 'asc')}>
    {icon && <IconWrapper>{icon}</IconWrapper>}
    <Text>{name}</Text>
    <CollapsableStateIndicator isOpen={value === 'desc'} />
  </Container>
)
