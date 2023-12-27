import styled from 'styled-components'
import { ComponentProps, Ref, forwardRef } from 'react'

import { IconButton } from './IconButton'
import { transition } from '../css/transition'
import { ChevronDownIcon } from '../icons/ChevronDownIcon'

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

export const CollapseToggleButton = forwardRef(
  function CollapsableToggleIconButton(
    { isOpen, ...props }: CollapseToggleButtonProps,
    ref: Ref<HTMLButtonElement> | null,
  ) {
    return (
      <IconButton
        ref={ref}
        {...props}
        title={isOpen ? 'Collapse' : 'Expand'}
        icon={
          <IconWrapper isOpen={isOpen}>
            <ChevronDownIcon />
          </IconWrapper>
        }
      />
    )
  },
)
