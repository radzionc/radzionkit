import styled from 'styled-components'
import { ChildrenProp } from '../props'
import { ReactNode } from 'react'
import { VStack } from '@lib/ui/css/stack'
import { FieldError } from './FieldError'

type FieldSize = 's' | 'm'

interface FieldProps extends ChildrenProp {
  size?: FieldSize
  error?: ReactNode
}

const fieldMaxWidth: Record<FieldSize, number> = {
  s: 320,
  m: 400,
}

const Container = styled(VStack)`
  width: 100%;
  gap: 4px;
`

export const Field = ({ size, children, error }: FieldProps) => {
  return (
    <Container style={{ maxWidth: size ? fieldMaxWidth[size] : undefined }}>
      {children}
      <FieldError>{error}</FieldError>
    </Container>
  )
}
