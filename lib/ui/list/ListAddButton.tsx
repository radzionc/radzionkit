import { ClickableComponentProps } from '@lib/ui/props'
import { PlusIcon } from '@lib/ui/icons/PlusIcon'
import { Text } from '@lib/ui/text'
import { Hoverable } from '@lib/ui/base/Hoverable'
import styled from 'styled-components'
import { centerContent } from '@lib/ui/css/centerContent'
import { getColor } from '@lib/ui/theme/getters'
import { ReactNode } from 'react'
import { ChecklistItemFrame } from '../checklist/ChecklistItemFrame'

const IconContainer = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  ${centerContent};
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
      <ChecklistItemFrame style={{ alignItems: 'center' }}>
        <IconContainer>
          <PlusIcon />
        </IconContainer>
        <Text size={14} weight="regular">
          {text}
        </Text>
      </ChecklistItemFrame>
    </Container>
  )
}
