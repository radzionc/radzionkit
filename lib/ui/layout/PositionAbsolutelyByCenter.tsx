import styled from 'styled-components'

import { ChildrenProp, UiProps } from '../props'

type PositionAbsolutelyByCenterProps = ChildrenProp &
  UiProps & {
    left: React.CSSProperties['left']
    top: React.CSSProperties['top']
  }

const Wrapper = styled.div`
  position: absolute;
`

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  position: absolute;
`

export const PositionAbsolutelyByCenter = ({
  left,
  children,
  top,
  className,
  style = {},
}: PositionAbsolutelyByCenterProps) => {
  return (
    <Wrapper className={className} style={{ ...style, left, top }}>
      <Container>
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  )
}
