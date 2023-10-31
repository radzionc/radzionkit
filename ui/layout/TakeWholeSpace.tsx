import styled from 'styled-components'
import { takeWholeSpace } from '../css/takeWholeSpace'
import { takeWholeSpaceAbsolutely } from '../css/takeWholeSpaceAbsolutely'
import { ComponentWithChildrenProps, UIComponentProps } from '../props'

const Wrapper = styled.div`
  ${takeWholeSpaceAbsolutely}
  overflow: auto;
`

const Container = styled.div`
  ${takeWholeSpace};
  position: relative;
`

export const TakeWholeSpace = ({
  children,
  ...rest
}: ComponentWithChildrenProps & UIComponentProps) => {
  return (
    <Wrapper {...rest}>
      <Container>{children}</Container>
    </Wrapper>
  )
}
