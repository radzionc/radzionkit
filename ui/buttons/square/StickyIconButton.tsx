import styled from "styled-components";
import { defaultTransitionCSS } from "ui/animations/transitions";
import { centerContentCSS } from "ui/utils/centerContentCSS";
import { getCSSUnit } from "ui/utils/getCSSUnit";
import { getSameDimensionsCSS } from "ui/utils/getSameDimensionsCSS";

import { UnstyledButton } from "../UnstyledButton";

type StickyIconButtonKind = "regular" | "secondary";

export const stickyIconButtonSizes = ["xs", "s", "m", "l"] as const;

type StickyIconButtonSize = typeof stickyIconButtonSizes[number];

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  kind?: StickyIconButtonKind;
  size?: StickyIconButtonSize;
}

export const StickyIconButton = ({
  size = "m",
  icon,
  kind = "regular",
  ...rest
}: Props) => {
  return (
    <Container size={size}>
      <InteractiveArea kind={kind} size={size} {...rest}>
        {icon}
      </InteractiveArea>
    </Container>
  );
};

const sizeRecord: Record<StickyIconButtonSize, number> = {
  xs: 16,
  s: 20,
  m: 24,
  l: 28,
};

const Container = styled.div<{ size: StickyIconButtonSize }>`
  position: relative;
  ${centerContentCSS};
  ${({ size }) => getSameDimensionsCSS(sizeRecord[size])};
`;

interface InteractiveAreaProps {
  size: StickyIconButtonSize;
  kind: StickyIconButtonKind;
}

const InteractiveArea = styled(UnstyledButton)<InteractiveAreaProps>`
  position: absolute;
  ${centerContentCSS};
  border-radius: 8px;
  ${getSameDimensionsCSS("132%")};

  color: ${({ kind, theme: { colors } }) =>
    ({
      regular: colors.text,
      secondary: colors.textSupporting,
    }[kind].toCssValue())};

  font-size: ${({ size }) => getCSSUnit(sizeRecord[size])};

  ${defaultTransitionCSS};

  :hover {
    background: ${({ theme }) => theme.colors.backgroundGlass.toCssValue()};
  }
`;
