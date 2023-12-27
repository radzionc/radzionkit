import { css } from 'styled-components'

type BorderRadiusSize = 'm'

export const borderRadius: Record<BorderRadiusSize, ReturnType<typeof css>> = {
  m: css`
    border-radius: 12px;
  `,
}
