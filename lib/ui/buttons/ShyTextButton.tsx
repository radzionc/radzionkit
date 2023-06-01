import { ReactNode } from 'react'
import styled from 'styled-components'
import { defaultTransitionCSS } from '../animations/transitions'
import { Text } from '../Text'

import { UnstyledButton } from './UnstyledButton'

interface Props {
  onClick?: () => void
  text: ReactNode
  as?: any
}

const Container = styled(UnstyledButton)`
  color: ${({ theme }) => theme.colors.textSupporting.toCssValue()};
  ${defaultTransitionCSS};

  :hover {
    color: ${({ theme }) => theme.colors.text.toCssValue()};
  }
`

const Underline = styled.span`
  position: absolute;
  left: 1px;
  bottom: 1px;
  width: calc(100% - 1px);
  border-bottom: 1px dashed;
`

export const ShyTextButton = ({ onClick, text, as }: Props) => {
  return (
    <Container as={as} onClick={onClick}>
      <Text
        size={14}
        nowrap
        style={{ transition: 'none', position: 'relative' }}
        weight="bold"
      >
        {text}
        <Underline />
      </Text>
    </Container>
  )
}
