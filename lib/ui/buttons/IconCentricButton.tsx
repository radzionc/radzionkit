import { ReactNode } from 'react'
import styled from 'styled-components'

import { centerContent } from '../css/centerContent'
import { horizontalPadding } from '../css/horizontalPadding'

import { Button, ButtonProps } from './Button'

const Content = styled.div`
  position: relative;
  width: 100%;
  ${centerContent};
`

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  font-size: 18px;
`

interface Props extends Omit<ButtonProps, 'children'> {
  icon: ReactNode
  text: ReactNode
}

const Container = styled(Button)`
  ${horizontalPadding(24)};
`

export const IconCentricButton = ({ icon, text, as, ...rest }: Props) => (
  <Container kind="outlined" forwardedAs={as} size="xl" {...rest}>
    <Content>
      <IconWrapper>{icon}</IconWrapper>
      {text}
    </Content>
  </Container>
)
