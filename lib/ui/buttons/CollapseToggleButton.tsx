import { ComponentProps } from 'react'
import styled from 'styled-components'

import { transition } from '../css/transition'
import { ChevronDownIcon } from '../icons/ChevronDownIcon'

import { IconButton } from './IconButton'

type CollapseToggleButtonProps = Omit<
  ComponentProps<typeof IconButton>,
  'icon' | 'title'
> & {
  isOpen: boolean
}

const IconWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  svg {
    ${transition};
    transform: rotateZ(${({ isOpen }) => (isOpen ? '-180deg' : '0deg')});
  }
`

export function CollapseToggleButton({
  isOpen,
  ...props
}: CollapseToggleButtonProps) {
  return (
    <IconButton
      {...props}
      title={isOpen ? 'Collapse' : 'Expand'}
      icon={
        <IconWrapper isOpen={isOpen}>
          <ChevronDownIcon />
        </IconWrapper>
      }
    />
  )
}
