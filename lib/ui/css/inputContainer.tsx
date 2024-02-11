import { css } from 'styled-components'
import { transition } from './transition'
import { getColor } from '../theme/getters'

export const inputContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;

  ${transition};
  color: ${getColor('textSupporting')};

  &:focus-within {
    color: ${getColor('text')};
  }
`
