import styled, { css } from 'styled-components'

import { Props, RectButton } from './RectButton'

const Container = styled(RectButton)`
  border: 1px solid ${({ theme }) => theme.colors.backgroundGlass2.toCssValue()};

  ${({ isDisabled, isLoading }) =>
    !isDisabled &&
    !isLoading &&
    css`
      :hover {
        background: ${({ theme }) => theme.colors.outlinedHover.toCssValue()};
      }
    `};
`

export const OutlinedButton = ({ as, ...rest }: Props) => (
  <Container forwardedAs={as} {...rest} />
)
