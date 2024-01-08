import { css } from 'styled-components'

type BorderRadiusSize = 's' | 'm'

export const borderRadius: Record<BorderRadiusSize, ReturnType<typeof css>> = {
  s: css`
    border-radius: 8px;
  `,
  m: css`
    border-radius: 12px;
  `,
}
