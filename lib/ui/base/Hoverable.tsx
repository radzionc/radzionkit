import styled from 'styled-components'

import { getColor } from '../theme/getters'
import { ComponentProps } from 'react'
import { absoluteOutline } from '../css/absoluteOutline'
import { UnstyledButton } from '../buttons/UnstyledButton'
import { borderRadius } from '../css/borderRadius'

interface HighlightProps {
  horizontalOffset: number | string
  verticalOffset: number | string
}

const Highlight = styled.div<HighlightProps>`
  position: absolute;
  ${borderRadius.s};
  ${(props) => absoluteOutline(props.horizontalOffset, props.verticalOffset)}
`

const Container = styled(UnstyledButton)`
  position: relative;

  &:hover ${Highlight} {
    background: ${getColor('mist')};
  }
`

const Content = styled.div`
  z-index: 1;
`

type HoverableProps = ComponentProps<typeof Container> &
  Partial<HighlightProps> & {
    as?: React.ElementType
  }

export const Hoverable = ({
  children,
  horizontalOffset = 8,
  verticalOffset = 8,
  ...rest
}: HoverableProps) => {
  return (
    <Container type="button" {...rest}>
      <Highlight
        verticalOffset={verticalOffset}
        horizontalOffset={horizontalOffset}
      />
      <Content>{children}</Content>
    </Container>
  )
}
