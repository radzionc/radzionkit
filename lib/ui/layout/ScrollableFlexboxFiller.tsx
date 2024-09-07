import styled from 'styled-components'
import { TakeWholeSpaceAbsolutely } from '../css/takeWholeSpaceAbsolutely'
import { ComponentWithChildrenProps, UIComponentProps } from '../props'
import { hideScrollbars } from '../css/hideScrollbars'

const Wrapper = styled.div`
  flex: 1;
  position: relative;
`

type ContainerProps = {
  hideScrollbars?: boolean
}

const Container = styled(TakeWholeSpaceAbsolutely)<ContainerProps>`
  overflow: auto;
  ${(props) => props.hideScrollbars && hideScrollbars}
`

type ScrollableFlexboxFillerProps = ComponentWithChildrenProps &
  UIComponentProps &
  ContainerProps

export const ScrollableFlexboxFiller = ({
  children,
  className,
  style,
  hideScrollbars = false,
}: ScrollableFlexboxFillerProps) => (
  <Wrapper className={className} style={style}>
    <Container hideScrollbars={hideScrollbars}>{children}</Container>
  </Wrapper>
)
