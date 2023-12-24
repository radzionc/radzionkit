import styled from 'styled-components'

import { Text } from '.'

export const LinkText = styled(Text)`
  text-decoration: underline;

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.toCssValue()};
  }
`

export const ShyLinkText = styled(Text)`
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary.toCssValue()};
  }
`
ShyLinkText.defaultProps = {
  color: 'supporting',
}
