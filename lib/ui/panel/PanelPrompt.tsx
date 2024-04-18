import { interactive } from '@lib/ui/css/interactive'
import { transition } from '@lib/ui/css/transition'
import { VStack } from '@lib/ui/layout/Stack'
import { Panel } from '@lib/ui/panel/Panel'
import { Text } from '@lib/ui/text'
import { getColor } from '@lib/ui/theme/getters'
import styled from 'styled-components'
import {
  ClickableComponentProps,
  ComponentWithChildrenProps,
  TitledComponentProps,
} from '../props'

const Container = styled(Panel)`
  ${interactive};
  color: ${getColor('contrast')};
  border: 2px dashed ${getColor('primary')};

  ${transition};
  &:hover {
    background: ${getColor('foreground')};
  }
`

export const PanelPrompt = ({
  title,
  children,
  onClick,
}: TitledComponentProps &
  ComponentWithChildrenProps &
  ClickableComponentProps) => {
  return (
    <Container onClick={onClick} kind="secondary">
      <VStack gap={8} alignItems="center">
        <Text size={16} weight="bold">
          {title}
        </Text>
        <Text height="large" size={14} centered>
          {children}
        </Text>
      </VStack>
    </Container>
  )
}
