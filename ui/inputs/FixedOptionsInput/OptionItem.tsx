import styled from 'styled-components'
import { transition } from '../../css/transition'
import { horizontalPadding } from '../../css/horizontalPadding'
import { textInputPadding } from '../../css/textInput'
import { verticalPadding } from '../../css/verticalPadding'
import { getColor } from '../../theme/getters'
import { UnstyledButton } from '../../buttons/UnstyledButton'

export const OptionItem = styled(UnstyledButton)`
  width: 100%;
  ${transition};
  cursor: pointer;

  ${horizontalPadding(textInputPadding)};
  ${verticalPadding(8)}
  :hover {
    background: ${getColor('mist')};
  }
`
