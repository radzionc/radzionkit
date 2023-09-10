import styled from 'styled-components'

import { defaultTransitionCSS } from './animations/transitions'
import { getColor } from './theme/getters'
import { UnstyledButton } from './buttons/UnstyledButton'
import { ComponentProps } from 'react'
import { absoluteOutline } from '../css/absoluteOutline'

interface HighlightProps {
  horizontalOffset: number | string
  verticalOffset: number | string
}

const Highlight = styled.div<HighlightProps>`
  position: absolute;
  ${defaultTransitionCSS};
  border-radius: 8px;
  ${(props) => absoluteOutline(props.horizontalOffset, props.verticalOffset)}
`

const Container = styled(UnstyledButton)`
  position: relative;

  :hover ${Highlight} {
    background: ${getColor('mist')};
  }
`

const Content = styled.div`
  z-index: 1;
`

type HoverableProps = ComponentProps<typeof Container> & Partial<HighlightProps>

export const Hoverable = ({
  children,
  horizontalOffset = 8,
  verticalOffset = 8,
  ...rest
}: HoverableProps) => {
  return (
    <Container {...rest}>
      <Highlight
        verticalOffset={verticalOffset}
        horizontalOffset={horizontalOffset}
      />
      <Content>{children}</Content>
    </Container>
  )
}
