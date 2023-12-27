import styled from 'styled-components'
import { ComponentWithChildrenProps } from '../props'

interface PositionAbsolutelyCenterHorizontallyProps
  extends ComponentWithChildrenProps {
  top: React.CSSProperties['top']
  fullWidth?: boolean
}

const Wrapper = styled.div`
  position: absolute;
  left: 0;
`

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const Content = styled.div`
  position: absolute;
  left: 0;
`

export const PositionAbsolutelyCenterHorizontally = ({
  top,
  children,
  fullWidth,
}: PositionAbsolutelyCenterHorizontallyProps) => {
  const width = fullWidth ? '100%' : undefined
  return (
    <Wrapper style={{ top, width }}>
      <Container style={{ width }}>
        <Content style={{ width }}>{children}</Content>
      </Container>
    </Wrapper>
  )
}
