import { ClickableComponentProps } from '@lib/ui/props'
import { PlusIcon } from '@lib/ui/icons/PlusIcon'
import { Text } from '@lib/ui/text'
import { Hoverable } from '@lib/ui/base/Hoverable'
import styled from 'styled-components'
import { getColor } from '@lib/ui/theme/getters'
import { ReactNode } from 'react'
import { PrefixedItemFrame } from './PrefixedItemFrame'
import { IconWrapper } from '../icons/IconWrapper'

const IconContainer = styled(IconWrapper)`
  color: ${getColor('primary')};
`

const Container = styled(Hoverable)`
  color: ${getColor('textShy')};
  &:hover {
    color: ${getColor('primary')};
  }
`
type ListAddButton = ClickableComponentProps & {
  text: ReactNode
}

export const ListAddButton = ({ onClick, text }: ListAddButton) => {
  return (
    <Container verticalOffset={0} onClick={onClick}>
      <PrefixedItemFrame
        style={{ alignItems: 'center' }}
        prefix={
          <IconContainer>
            <PlusIcon />
          </IconContainer>
        }
      >
        <Text size={14} weight="regular">
          {text}
        </Text>
      </PrefixedItemFrame>
    </Container>
  )
}
