import { match } from '@lib/utils/match'
import styled, { css } from 'styled-components'

import { getColor } from '../theme/getters'

import { LayoutDirection } from './LayoutDirection'

type LineSeparatorProps = {
  layout: LayoutDirection
}

const lineSize = '1px'

export const LineSeparator = styled.div<LineSeparatorProps>`
  background: ${getColor('mist')};
  ${({ layout }) =>
    match(layout, {
      row: () => css`
        min-width: ${lineSize};
        width: ${lineSize};
        height: 100%;

        grid-row: 1/-1;
      `,
      column: () => css`
        min-height: ${lineSize};
        height: ${lineSize};
        width: 100%;

        grid-column: 1/-1;
      `,
    })}
`
