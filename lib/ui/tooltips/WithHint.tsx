import { ReactNode } from 'react'
import { ComponentWithChildrenProps } from '../props'
import { HStack } from '../layout/Stack'
import { Tooltip } from './Tooltip'
import { HelpCircleIcon } from '../icons/HelpCircleIcon'
import { IconWrapper } from '../icons/IconWrapper'
import styled from 'styled-components'
import { horizontalPadding } from '../css/horizontalPadding'

interface WithHintProps extends ComponentWithChildrenProps {
  hint?: ReactNode
}

const Container = styled(IconWrapper)`
  ${horizontalPadding(4)};
`

export const WithHint = ({ children, hint }: WithHintProps) => {
  return (
    <HStack alignItems="center">
      {children}
      {hint && (
        <Tooltip
          placement="top"
          content={hint}
          renderOpener={(props) => (
            <Container {...props}>
              <HelpCircleIcon />
            </Container>
          )}
        />
      )}
    </HStack>
  )
}
