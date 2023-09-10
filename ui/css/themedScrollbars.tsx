import { css } from 'styled-components'
import { round } from './round'
import { getColor } from '../ui/theme/getters'

export const themedScrollbars = css`
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    ${round}
    cursor: pointer;
    background-color: ${getColor('mist')};
    :hover {
      background-color: ${getColor('mistExtra')};
    }
  }
`
