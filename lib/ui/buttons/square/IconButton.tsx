import styled from "styled-components";
import { defaultTransitionCSS } from "lib/ui/animations/transitions";
import { centerContentCSS } from "lib/ui/utils/centerContentCSS";
import { getCSSUnit } from "lib/ui/utils/getCSSUnit";
import { getSameDimensionsCSS } from "lib/ui/utils/getSameDimensionsCSS";
import { roundedCSS } from "lib/ui/utils/roundedCSS";

import { UnstyledButton } from "../UnstyledButton";
import { forwardRef, Ref } from "react";

type IconButtonKind = "regular" | "alert";

export const stickyIconButtonSizes = ["xs", "s", "m", "l"] as const;

type IconButtonSize = typeof stickyIconButtonSizes[number];

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  kind?: IconButtonKind;
  size?: IconButtonSize;
  as?: "button" | "div";
}

export const IconButton = forwardRef(function IconButtonInner(
  { size = "m", icon, kind = "regular", ...rest }: IconButtonProps,
  ref: Ref<HTMLButtonElement> | null
) {
  return (
    <Container ref={ref} {...rest} kind={kind} size={size}>
      {icon}
    </Container>
  );
});

const sizeRecord: Record<IconButtonSize, number> = {
  xs: 16,
  s: 20,
  m: 32,
  l: 48,
};

interface ContainerProps {
  size: IconButtonSize;
  kind: IconButtonKind;
}

const Container = styled(UnstyledButton)<ContainerProps>`
  ${centerContentCSS};
  border-radius: 8px;
  ${roundedCSS};
  ${({ size }) => getSameDimensionsCSS(sizeRecord[size])};

  color: ${({ kind, theme: { colors } }) =>
    ({
      regular: colors.text,
      alert: colors.alert,
    }[kind].toCssValue())};

  font-size: ${({ size }) => `calc(${getCSSUnit(sizeRecord[size] * 0.4)})`};

  ${defaultTransitionCSS};

  background: ${({ kind, theme: { colors } }) =>
    ({
      regular: colors.backgroundGlass,
      alert: colors.alert.getVariant({ a: (a) => a * 0.2 }),
    }[kind].toCssValue())};

  :hover {
    background: ${({ kind, theme: { colors } }) =>
      ({
        regular: colors.backgroundGlass2,
        alert: colors.alert.getVariant({ a: (a) => a * 0.28 }),
      }[kind]
        .getVariant({ a: (a) => a * 0.28 })
        .toCssValue())};
  }
`;
