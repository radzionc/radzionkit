import styled from "styled-components";
import { defaultTransitionCSS } from "ui/animations/transitions";
import { centerContentCSS } from "ui/utils/centerContentCSS";
import { getCSSUnit } from "ui/utils/getCSSUnit";
import { getSameDimensionsCSS } from "ui/utils/getSameDimensionsCSS";
import { roundedCSS } from "ui/utils/roundedCSS";

import { UnstyledButton } from "../UnstyledButton";

type IconButtonKind = "regular" | "alert";

export const stickyIconButtonSizes = ["xs", "s", "m", "l"] as const;

type IconButtonSize = typeof stickyIconButtonSizes[number];

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  kind?: IconButtonKind;
  size?: IconButtonSize;
  as?: "button" | "div";
}

export const IconButton = ({
  size = "m",
  icon,
  kind = "regular",
  ...rest
}: Props) => {
  return (
    <Container {...rest} kind={kind} size={size}>
      {icon}
    </Container>
  );
};

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
