import styled, { css } from 'styled-components'

import { HSLA } from '../colors/HSLA'
import { Text } from '../text'
import { match } from '@radzionkit/utils/match'

export const Tag = styled(Text)<{ $color: HSLA }>`
  border-radius: 8px;
  padding: 4px 8px;
  font-weight: 600;
  font-size: 14px;
  ${({ theme, $color }) =>
    match(theme.name, {
      dark: () => css`
        color: ${$color.getVariant({ s: () => 56, l: () => 60 }).toCssValue()};
        background: ${$color.getVariant({ a: () => 0.06 }).toCssValue()};
      `,
      light: () => css`
        color: ${$color.getVariant({ s: () => 40, l: () => 40 }).toCssValue()};
        background: ${$color.getVariant({ a: () => 0.1 }).toCssValue()};
      `,
    })}
`
