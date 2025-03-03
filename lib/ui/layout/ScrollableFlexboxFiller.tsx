import styled from 'styled-components'

import { hideScrollbars } from '../css/hideScrollbars'
import { TakeWholeSpaceAbsolutely } from '../css/takeWholeSpaceAbsolutely'
import { ChildrenProp, UiProps } from '../props'

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

type ScrollableFlexboxFillerProps = ChildrenProp & UiProps & ContainerProps

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
