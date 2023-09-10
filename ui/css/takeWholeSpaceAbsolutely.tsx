import { css } from 'styled-components'
import { takeWholeSpace } from './takeWholeSpace'

export const takeWholeSpaceAbsolutely = css`
  position: absolute;
  left: 0;
  top: 0;
  ${takeWholeSpace};
`
