import { VStack } from '@lib/ui/css/stack'
import {
  ComponentWithChildrenProps,
  TitledComponentProps,
  UIComponentProps,
} from '@lib/ui/props'
import styled from 'styled-components'
import { FormSectionShyTitle } from './FormSectionShyTitle'

const Container = styled(VStack)`
  gap: 8px;
  overflow-y: auto;
`

export const FieldArrayContainer = ({
  title,
  children,
  ...rest
}: ComponentWithChildrenProps & TitledComponentProps & UIComponentProps) => (
  <Container {...rest}>
    <FormSectionShyTitle>{title}</FormSectionShyTitle>
    {children}
  </Container>
)
