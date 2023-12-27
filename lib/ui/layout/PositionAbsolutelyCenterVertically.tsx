import styled from 'styled-components'
import { ComponentWithChildrenProps } from '../props'

interface PositionAbsolutelyCenterVerticallyProps
  extends ComponentWithChildrenProps {
  left: React.CSSProperties['left']
  fullHeight?: boolean
  className?: string
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
}: PositionAbsolutelyCenterVerticallyProps) => {
  return (
    <Wrapper
      className={className}
      style={{ left, height: fullHeight ? '100%' : undefined }}
    >
      <Container style={{ height: fullHeight ? '100%' : undefined }}>
        <Content style={{ height: fullHeight ? '100%' : undefined }}>
          {children}
        </Content>
      </Container>
    </Wrapper>
  )
}
