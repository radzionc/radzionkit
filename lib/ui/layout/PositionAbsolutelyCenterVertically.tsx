import styled from 'styled-components'
import { ChildrenProp, UiProps } from '../props'

type PositionAbsolutelyCenterVerticallyProps = ChildrenProp &
  UiProps & {
    left: React.CSSProperties['left']
    fullHeight?: boolean
  }

const Wrapper = styled.div`
  position: absolute;
  top: 0;
`

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  position: absolute;
  top: 0;
`

export const PositionAbsolutelyCenterVertically = ({
  left,
  children,
  fullHeight,
  className,
  style = {},
}: PositionAbsolutelyCenterVerticallyProps) => {
  return (
    <Wrapper
      className={className}
      style={{ ...style, left, height: fullHeight ? '100%' : undefined }}
    >
      <Container style={{ height: fullHeight ? '100%' : undefined }}>
        <Content style={{ height: fullHeight ? '100%' : undefined }}>
          {children}
        </Content>
      </Container>
    </Wrapper>
  )
}
