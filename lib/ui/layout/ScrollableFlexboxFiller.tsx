import styled from 'styled-components'
import { TakeWholeSpaceAbsolutely } from '../css/takeWholeSpaceAbsolutely'
import { ComponentWithChildrenProps, UIComponentProps } from '../props'

const Wrapper = styled.div`
  flex: 1;
  position: relative;
`

const Container = styled(TakeWholeSpaceAbsolutely)`
  overflow: auto;
`

export const ScrollableFlexboxFiller = ({
  children,
  className,
  style,
}: ComponentWithChildrenProps & UIComponentProps) => (
  <Wrapper className={className} style={style}>
    <Container>{children}</Container>
  </Wrapper>
)
