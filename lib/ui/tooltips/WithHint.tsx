import { ReactNode } from 'react'
import { ComponentWithChildrenProps } from '../props'
import { HStack } from '../layout/Stack'
import { Tooltip } from './Tooltip'
import { HelpCircleIcon } from '../icons/HelpCircleIcon'
import { IconWrapper } from '../icons/IconWrapper'

interface WithHintProps extends ComponentWithChildrenProps {
  hint?: ReactNode
}

export const WithHint = ({ children, hint }: WithHintProps) => {
  return (
    <HStack alignItems="center" gap={4}>
      {children}
      {hint && (
        <Tooltip
          placement="top"
          content={hint}
          renderOpener={(props) => (
            <IconWrapper {...props}>
              <HelpCircleIcon />
            </IconWrapper>
          )}
        />
      )}
    </HStack>
  )
}
