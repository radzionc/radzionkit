import { Hoverable } from '@lib/ui/base/Hoverable'
import { PlusIcon } from '@lib/ui/icons/PlusIcon'
import { OnClickProp } from '@lib/ui/props'
import { Text } from '@lib/ui/text'
import { getColor } from '@lib/ui/theme/getters'
import { ReactNode } from 'react'
import styled from 'styled-components'

import { IconWrapper } from '../icons/IconWrapper'

import { PrefixedItemFrame } from './PrefixedItemFrame'

const IconContainer = styled(IconWrapper)`
  color: ${getColor('primary')};
`

const Container = styled(Hoverable)`
  color: ${getColor('textSupporting')};
  &:hover {
    color: ${getColor('primary')};
  }
`
type ListAddButton = OnClickProp & {
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
        <Text size={14} weight="400">
          {text}
        </Text>
      </PrefixedItemFrame>
    </Container>
  )
}
