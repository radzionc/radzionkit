import { ComponentProps, ReactNode } from 'react'
import styled from 'styled-components'
import { defaultTransitionCSS } from '../animations/transitions'
import { Text } from '../Text'

import { getColor } from '../theme/getters'
import { interactiveCSS } from '../utils/interactiveCSS'
import { UnstyledButton } from './UnstyledButton'

const Container = styled(UnstyledButton)`
  ${interactiveCSS};
  color: ${getColor('textSupporting')};
  ${defaultTransitionCSS};

  :hover {
    color: ${getColor('contrast')};
  }
`

interface Props extends ComponentProps<typeof Container> {
  text: ReactNode
}

const Underline = styled.span`
  position: absolute;
  left: 1px;
  bottom: -1px;
  width: calc(100% - 1px);
  border-bottom: 1px dashed;
`

export const ShyTextButton = ({ onClick, text, as }: Props) => {
  return (
    <Container as={as} onClick={onClick}>
      <Text
        nowrap
        style={{ transition: 'none', position: 'relative' }}
        weight="semibold"
      >
        {text}
        <Underline />
      </Text>
    </Container>
  )
}
