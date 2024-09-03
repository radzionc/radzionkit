import { VStack } from '@lib/ui/css/stack'
import { ComponentWithChildrenProps, TitledComponentProps } from '@lib/ui/props'
import styled from 'styled-components'
import { FormSectionShyTitle } from './FormSectionShyTitle'

const Container = styled(VStack)`
  gap: 8px;
  overflow-y: auto;
`

export const FieldArrayContainer = ({
  title,
  children,
}: ComponentWithChildrenProps & TitledComponentProps) => (
  <Container>
    <FormSectionShyTitle>{title}</FormSectionShyTitle>
    {children}
  </Container>
)
