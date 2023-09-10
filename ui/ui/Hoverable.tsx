import styled from 'styled-components'

import { defaultTransitionCSS } from './animations/transitions'
import { getColor } from './theme/getters'
import { ComponentWithChildrenProps } from '../props'
import { UnstyledButton } from './buttons/UnstyledButton'
import { toSizeUnit } from '../css/toSizeUnit'

const Highlight = styled.div`
  position: absolute;
  ${defaultTransitionCSS};
  border-radius: 8px;
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

interface HoverableProps extends ComponentWithChildrenProps {
  horizontalOffset?: number
  verticalOffset?: number
  as?: React.ElementType
  onClick?: () => void
  style?: React.CSSProperties
}

export const Hoverable = ({
  children,
  horizontalOffset = 8,
  verticalOffset = 8,
  onClick,
  as,
  style,
}: HoverableProps) => {
  return (
    <Container onClick={onClick} as={as} style={style}>
      <Highlight
        style={{
          left: toSizeUnit(-horizontalOffset),
          top: toSizeUnit(-verticalOffset),
          width: `calc(100% + ${toSizeUnit(horizontalOffset * 2)})`,
          height: `calc(100% + ${toSizeUnit(verticalOffset * 2)})`,
        }}
      />
      <Content>{children}</Content>
    </Container>
  )
}
