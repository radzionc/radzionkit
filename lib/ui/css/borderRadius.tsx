import { css } from 'styled-components'

type BorderRadiusSize = 'xs' | 's' | 'm'

export const borderRadius: Record<BorderRadiusSize, ReturnType<typeof css>> = {
  xs: css`
    border-radius: 4px;
  `,
  s: css`
    border-radius: 8px;
  `,
  m: css`
    border-radius: 12px;
  `,
}
