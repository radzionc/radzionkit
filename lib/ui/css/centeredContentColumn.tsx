import { css } from 'styled-components'

import { toSizeUnit } from './toSizeUnit'

interface CenteredContentColumnParams {
  contentMaxWidth: number | string
  horizontalMinPadding?: number | string
}

export const centeredContentColumn = ({
  contentMaxWidth,
  horizontalMinPadding = 20,
}: CenteredContentColumnParams) => css`
  display: grid;
  grid-template-columns:
    1fr min(
      ${toSizeUnit(contentMaxWidth)},
      100% - calc(${toSizeUnit(horizontalMinPadding)} * 2)
    )
    1fr;
  grid-column-gap: ${toSizeUnit(horizontalMinPadding)};

  > * {
    grid-column: 2;
  }
`
