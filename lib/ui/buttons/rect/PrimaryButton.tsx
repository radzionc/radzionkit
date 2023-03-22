import styled, { css } from "styled-components";

import { RectButton, Props as RectButtonProps } from "./RectButton";

type PrimaryButtonKind =
  | "primary"
  | "attention"
  | "reversed"
  | "secondary"
  | "alert";

export type Props = RectButtonProps & {
  kind?: PrimaryButtonKind;
};

const defaultKind = "primary";

const Container = styled(RectButton) <Props>`
  color: ${({ theme }) => theme.colors.contrast.toCssValue()};

  ${({ kind = defaultKind }) =>
  ({
    primary: css`
        background: ${({ theme }) => theme.colors.primary.toCssValue()};
      `,
    attention: css`
        background: ${({ theme }) => theme.colors.attention.toCssValue()};
      `,
    reversed: css`
        background: ${({ theme }) => theme.colors.text.toCssValue()};
        color: ${({ theme }) => theme.colors.background.toCssValue()};
      `,
    secondary: css`
        background: ${({ theme }) => theme.colors.backgroundGlass.toCssValue()};
        color: ${({ theme }) => theme.colors.text.toCssValue()};
      `,
    alert: css`
        background: ${({ theme }) => theme.colors.backgroundGlass.toCssValue()};
        color: ${({ theme }) => theme.colors.alert.toCssValue()};
      `,
  }[kind])};
  ${({ isDisabled, isLoading, kind = defaultKind }) =>
    !isDisabled &&
    !isLoading &&
    {
      primary: css`
        :hover {
          background: ${({ theme }) => theme.colors.primaryHover.toCssValue()};
        }
      `,
      attention: css`
        :hover {
          background: ${({ theme }) =>
          theme.colors.attentionHover.toCssValue()};
        }
      `,
      reversed: css`
        :hover {
          background: ${({ theme }) =>
          theme.colors.textSupporting.toCssValue()};
        }
      `,
      secondary: css`
        :hover {
          background: ${({ theme }) =>
          theme.colors.backgroundGlass2.toCssValue()};
          color: ${({ theme }) => theme.colors.text.toCssValue()};
        }
      `,
      alert: css`
        :hover {
          background: ${({ theme }) =>
          theme.colors.alert.getVariant({ a: () => 0.12 }).toCssValue()};
        }
      `,
    }[kind]};
`;

export const PrimaryButton = ({ as, ...rest }: Props) => (
  <Container forwardedAs={as} {...rest} />
);
