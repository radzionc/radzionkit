import styled from 'styled-components'
import { horizontalPadding } from '../../../css/horizontalPadding'
import { verticalPadding } from '../../../css/verticalPadding'
import { textInputHorizontalPadding } from '../../../css/textInput'

export const FixedOptionInputMessage = styled.div`
  ${horizontalPadding(textInputHorizontalPadding)};
  ${verticalPadding(8)}
`
