import { ReactNode } from 'react'

import { OnClickProp, ChildrenProp } from '../props'

import { EmbeddedPromptContainer } from './EmbeddedPromptContainer'
import { EmbeddedPromptContentFrame } from './EmbeddedPromptContentFrame'

type EmbeddedPromptProps = ChildrenProp &
  OnClickProp & {
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
