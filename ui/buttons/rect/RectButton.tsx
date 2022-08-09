import { ComponentWithChildrenProps } from "shared/props";
import styled, { css } from "styled-components";
import { defaultTransitionCSS } from "ui/animations/transitions";
import { centerContentCSS } from "ui/utils/centerContentCSS";
import { getHorizontalPaddingCSS } from "ui/utils/getHorizontalPaddingCSS";
import { Spinner } from "ui/Spinner";

import { getCSSUnit } from "ui/utils/getCSSUnit";
import { UnstyledButton } from "../UnstyledButton";

type RectButtonSize = "xs" | "s" | "m" | "l" | "xl";

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentWithChildrenProps & {
    as?: "button" | "div";
    size?: RectButtonSize;
    isDisabled?: boolean;
    isLoading?: boolean;
    isRounded?: boolean;
  };

interface ContainerProps {
  size: RectButtonSize;
  isDisabled?: boolean;
  isLoading?: boolean;
  isRounded?: boolean;
}

const Container = styled(UnstyledButton)<ContainerProps>`
  color: ${({ theme }) => theme.colors.text.toCssValue()};
  border-radius: 8px;
  ${defaultTransitionCSS};

  ${centerContentCSS};

  border-radius: ${({ isRounded }) => getCSSUnit(isRounded ? 100 : 8)};

  ${({ size }) =>
    ({
      xs: css`
        ${getHorizontalPaddingCSS(8)}
        height: 28px;
        font-size: 14px;
      `,
      s: css`
        ${getHorizontalPaddingCSS(16)}
        height: 36px;
        font-size: 14px;
      `,
      m: css`
        ${getHorizontalPaddingCSS(20)}
        height: 40px;
        font-size: 16px;
      `,
      l: css`
        ${getHorizontalPaddingCSS(20)}
        height: 48px;
        font-size: 16px;
      `,
      xl: css`
        ${getHorizontalPaddingCSS(40)}
        height: 56px;
        font-size: 18px;
      `,
    }[size])};

  font-weight: 500;

  cursor: ${({ isDisabled, isLoading }) =>
    isDisabled ? "initial" : isLoading ? "wait" : "pointer"};

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.8;
    `};
`;

export const RectButton = ({
  children,
  size = "m",
  isDisabled = false,
  isLoading = false,
  onClick,
  ...rest
}: Props) => (
  <Container
    size={size}
    isDisabled={isDisabled}
    isLoading={isLoading}
    onClick={isDisabled || isLoading ? undefined : onClick}
    {...rest}
  >
    {isLoading ? (
      <div>
        <Spinner />
      </div>
    ) : (
      <>{children}</>
    )}
  </Container>
);
