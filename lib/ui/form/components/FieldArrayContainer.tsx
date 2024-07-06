import { VStack } from '@lib/ui/layout/Stack'
import { ComponentWithChildrenProps, TitledComponentProps } from '@lib/ui/props'
import styled from 'styled-components'
import { FieldArrayTitle } from './FieldArrayTitle'

const Container = styled(VStack)`
  gap: 8px;
  overflow-y: auto;
`

export const FieldArrayContainer = ({
  title,
  children,
}: ComponentWithChildrenProps & TitledComponentProps) => (
  <Container>
    <FieldArrayTitle>{title}</FieldArrayTitle>
    {children}
  </Container>
)
