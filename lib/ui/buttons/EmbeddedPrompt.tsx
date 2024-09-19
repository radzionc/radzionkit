import { ReactNode } from 'react'
import { ClickableComponentProps, ComponentWithChildrenProps } from '../props'
import { EmbeddedPromptContainer } from './EmbeddedPromptContainer'
import { EmbeddedPromptContentFrame } from './EmbeddedPromptContentFrame'

type EmbeddedPromptProps = ComponentWithChildrenProps &
  ClickableComponentProps & {
    icon: ReactNode
  }

export const EmbeddedPrompt = ({
  children,
  icon,
  onClick,
}: EmbeddedPromptProps) => (
  <EmbeddedPromptContainer onClick={onClick}>
    <EmbeddedPromptContentFrame>
      {icon}
      {children}
    </EmbeddedPromptContentFrame>
  </EmbeddedPromptContainer>
)
