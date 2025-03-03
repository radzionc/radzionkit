import { VStack } from '@lib/ui/css/stack'
import styled from 'styled-components'

import { ChildrenProp } from '../../props'

const Container = styled.div`
  min-width: 260px;
  height: 100%;
  background: ${({ theme }) => theme.colors.foreground.toCssValue()};
  padding: 20px 8px;
  overflow: auto;
`

export const Sidebar = ({ children }: ChildrenProp) => {
  return (
    <Container>
      <VStack alignItems="center" fullHeight justifyContent="space-between">
        {children}
      </VStack>
    </Container>
  )
}
