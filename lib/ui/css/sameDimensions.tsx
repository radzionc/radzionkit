import { css } from 'styled-components'

import { toSizeUnit } from './toSizeUnit'

export const sameDimensions = (size: string | number) => {
  const value = toSizeUnit(size)

  return css`
    width: ${value};
    height: ${value};
    min-width: ${value};
    min-height: ${value};
  `
}
