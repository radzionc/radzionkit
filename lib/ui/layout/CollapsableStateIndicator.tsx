import { ComponentProps } from 'react'
import styled from 'styled-components'

import { ChevronDownIcon } from '../icons/ChevronDownIcon'
import { IconWrapper } from '../icons/IconWrapper'

const Container = styled(IconWrapper)<{ isOpen: boolean }>`
  transform: rotateZ(${({ isOpen }) => (isOpen ? '-180deg' : '0deg')});
`

export const CollapsableStateIndicator = (
  props: Omit<ComponentProps<typeof Container>, 'children'>,
) => (
  <Container {...props}>
    <ChevronDownIcon />
  </Container>
)
