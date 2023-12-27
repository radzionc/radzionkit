import styled from 'styled-components'
import { ComponentWithChildrenProps } from '../../props'
import { VStack } from '../../layout/Stack'

const Container = styled.div`
  min-width: 260px;
  height: 100%;
  background: ${({ theme }) => theme.colors.foreground.toCssValue()};
  padding: 20px 8px;
  overflow: auto;
`

export const Sidebar = ({ children }: ComponentWithChildrenProps) => {
  return (
    <Container>
      <VStack alignItems="center" fullHeight justifyContent="space-between">
        {children}
      </VStack>
    </Container>
  )
}
