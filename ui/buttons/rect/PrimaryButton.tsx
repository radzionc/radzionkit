import styled, { css } from 'styled-components'

import { RectButton, Props as RectButtonProps } from './RectButton'

type PrimaryButtonKind = 'primary' | 'attention'

export type Props = RectButtonProps & {
  kind?: PrimaryButtonKind
}

const defaultKind = 'primary'

const Container = styled(RectButton)<Props>`
  color: ${({ theme }) => theme.colors.white.toCssValue()};

  ${({ kind = defaultKind }) =>
    ({
      primary: css`
        background: ${({ theme }) => theme.colors.primary.toCssValue()};
      `,
      attention: css`
        background: ${({ theme }) => theme.colors.attention.toCssValue()};
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
    }[kind]};
`

export const PrimaryButton = ({ as, ...rest }: Props) => (
  <Container forwardedAs={as} {...rest} />
)
