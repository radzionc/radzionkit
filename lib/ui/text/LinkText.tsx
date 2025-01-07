import styled from 'styled-components'

import { Text } from '.'

export const LinkText = styled(Text)`
  text-decoration: underline;

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.toCssValue()};
  }
`
