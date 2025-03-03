import { HStack } from '@lib/ui/css/stack'
import { ReactNode } from 'react'
import styled from 'styled-components'

import { horizontalPadding } from '../css/horizontalPadding'
import { HelpCircleIcon } from '../icons/HelpCircleIcon'
import { IconWrapper } from '../icons/IconWrapper'
import { ChildrenProp } from '../props'

import { Tooltip } from './Tooltip'

interface WithHintProps extends ChildrenProp {
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
