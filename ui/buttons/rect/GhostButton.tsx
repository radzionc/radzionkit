import styled, { css } from 'styled-components'

import { RectButton, Props as RectButtonProps } from './RectButton'

type GhostButtonKind = 'regular' | 'secondary'

const defaultKind = 'regular'

export type Props = RectButtonProps & {
  kind?: GhostButtonKind
}

const Container = styled(RectButton)<Props>`
  ${({ kind = defaultKind }) =>
    ({
      regular: css`
        color: ${({ theme }) => theme.colors.text.toCssValue()};
      `,
      secondary: css`
        color: ${({ theme }) => theme.colors.textSupporting.toCssValue()};
      `,
    }[kind])};
  ${({ isDisabled, isLoading }) =>
    !isDisabled &&
    !isLoading &&
    css`
      :hover {
        background: ${({ theme }) => theme.colors.backgroundGlass.toCssValue()};
      }
    `};
`

export const GhostButton = ({ as, ...rest }: Props) => (
  <Container forwardedAs={as} {...rest} />
)
