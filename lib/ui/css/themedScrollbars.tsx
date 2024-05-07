import { css } from 'styled-components'
import { round } from './round'
import { getColor } from '../theme/getters'

export const themedScrollbars = css`
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${getColor('mist')};
  }

  &::-webkit-scrollbar-thumb {
    ${round}
    cursor: pointer;
    background-color: ${getColor('textShy')};
    &:hover {
      background-color: ${getColor('textSupporting')};
    }
  }
`
