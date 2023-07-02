import styled from "styled-components"

import { defaultTransitionCSS } from "./animations/transitions"
import { ComponentWithChildrenProps } from "lib/shared/props"
import { UnstyledButton } from "./buttons/UnstyledButton"
import { getCSSUnit } from "./utils/getCSSUnit"

const Highlight = styled.div`
  position: absolute;
  ${defaultTransitionCSS};
  border-radius: 8px;
`

const Container = styled(UnstyledButton)`
  position: relative;

  :hover ${Highlight} {
    background: ${({ theme }) => theme.colors.mist.toCssValue()};
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
          left: getCSSUnit(-horizontalOffset),
          top: getCSSUnit(-verticalOffset),
          width: `calc(100% + ${getCSSUnit(horizontalOffset * 2)})`,
          height: `calc(100% + ${getCSSUnit(verticalOffset * 2)})`,
        }}
      />
      <Content>{children}</Content>
    </Container>
  )
}
