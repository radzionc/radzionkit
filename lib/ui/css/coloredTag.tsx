import { match } from '@lib/utils/match'
import { css } from 'styled-components'

import { HSLA } from '../colors/HSLA'

export const coloredTag = (color: HSLA) => css`
  ${({ theme }) =>
    match(theme.name, {
      dark: () => css`
        color: ${color.getVariant({ s: () => 56, l: () => 60 }).toCssValue()};
        background: ${color.getVariant({ a: () => 0.06 }).toCssValue()};
      `,
      light: () => css`
        color: ${color.getVariant({ s: () => 40, l: () => 40 }).toCssValue()};
        background: ${color.getVariant({ a: () => 0.1 }).toCssValue()};
      `,
    })}
`
