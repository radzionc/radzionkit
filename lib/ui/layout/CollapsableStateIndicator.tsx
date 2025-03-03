import styled from 'styled-components'

import { ChevronDownIcon } from '../icons/ChevronDownIcon'
import { IconWrapper } from '../icons/IconWrapper'
import { UiProps } from '../props'

type CollapsableStateIndicatorProps = UiProps & {
  isOpen: boolean
}

const Container = styled(IconWrapper)<{ isOpen: boolean }>`
  transform: rotateZ(${({ isOpen }) => (isOpen ? '-180deg' : '0deg')});
`

export const CollapsableStateIndicator = (
  props: CollapsableStateIndicatorProps,
) => (
  <Container {...props}>
    <ChevronDownIcon />
  </Container>
)
