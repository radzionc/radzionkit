import styled from "styled-components"
import { defaultTransitionCSS } from "lib/ui/animations/transitions"
import { ChevronDownIcon } from "lib/ui/icons/ChevronDownIcon"
import { Ref, forwardRef } from "react"

import { Props as IconButtonProps } from "./StickyIconButton"
import { IconButton } from "./IconButton"

type Props = Omit<IconButtonProps, "icon"> & {
  isOpen: boolean
}

const IconWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  svg {
    ${defaultTransitionCSS};
    transform: rotateZ(${({ isOpen }) => (isOpen ? "-180deg" : "0deg")});
  }
`

export const CollapseToggleIconButton = forwardRef(
  function CollapsableToggleIconButton(
    { isOpen, ...props }: Props,
    ref: Ref<HTMLButtonElement> | null
  ) {
    return (
      <IconButton
        ref={ref}
        {...props}
        type="button"
        icon={
          <IconWrapper isOpen={isOpen}>
            <ChevronDownIcon />
          </IconWrapper>
        }
      />
    )
  }
)