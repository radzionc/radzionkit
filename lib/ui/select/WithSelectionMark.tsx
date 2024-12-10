import { ComponentProps } from 'react'
import { IconWrapper } from '../icons/IconWrapper'
import { CheckIcon } from '../icons/CheckIcon'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 20px;
  width: 100%;
  gap: 8px;
  align-items: center;
`

type WithSelectionMarkProps = ComponentProps<typeof Container> & {
  isSelected: boolean
}

export function WithSelectionMark({
  isSelected,
  children,
  ...rest
}: WithSelectionMarkProps) {
  return (
    <Container {...rest}>
      {children}
      <IconWrapper>{isSelected && <CheckIcon />}</IconWrapper>
    </Container>
  )
}
