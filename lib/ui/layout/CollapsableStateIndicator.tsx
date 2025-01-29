import styled from 'styled-components'
import { UiProps } from '../props'
import { IconWrapper } from '../icons/IconWrapper'
import { ChevronDownIcon } from '../icons/ChevronDownIcon'

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
