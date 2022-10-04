import styled from "styled-components";
import { defaultTransitionCSS } from "lib/ui/animations/transitions";
import { ChevronDownIcon } from "lib/ui/icons/ChevronDownIcon";

import { Props as IconButtonProps, StickyIconButton } from "./StickyIconButton";

type Props = Omit<IconButtonProps, "icon"> & {
  isOpen: boolean;
};

const IconWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  svg {
    ${defaultTransitionCSS};
    transform: rotateZ(${({ isOpen }) => (isOpen ? "-180deg" : "0deg")});
  }
`;

export const CollapseToggleIconButton = ({ isOpen, ...props }: Props) => (
  <StickyIconButton
    {...props}
    type="button"
    icon={
      <IconWrapper isOpen={isOpen}>
        <ChevronDownIcon />
      </IconWrapper>
    }
  />
);
