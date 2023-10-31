import { FlattenSimpleInterpolation, css } from 'styled-components'

type BorderRadiusSize = 'm'

export const borderRadius: Record<
  BorderRadiusSize,
  FlattenSimpleInterpolation
> = {
  m: css`
    border-radius: 12px;
  `,
}
