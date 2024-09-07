import { VStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'
import {
  ClickableComponentProps,
  ComponentWithChildrenProps,
  TitledComponentProps,
} from '../props'
import { CallOutPanel } from './CallOutPanel'

export const PanelPrompt = ({
  title,
  children,
  onClick,
}: TitledComponentProps &
  ComponentWithChildrenProps &
  ClickableComponentProps) => {
  return (
    <CallOutPanel onClick={onClick} kind="secondary">
      <VStack gap={8} alignItems="center">
        <Text size={16} weight="600">
          {title}
        </Text>
        <Text height="large" size={14} centerHorizontally>
          {children}
        </Text>
      </VStack>
    </CallOutPanel>
  )
}
