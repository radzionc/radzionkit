import styled from 'styled-components'
import { getColor } from '../../theme/getters'
import { textInputBorderRadius } from '../../css/textInput'

export const DropdownContainer = styled.div`
  background: ${getColor('foreground')};
  border: 1px solid ${getColor('mist')};

  ${textInputBorderRadius};
  overflow: hidden;
  max-height: 280px;
  overflow-y: auto;

  z-index: 1;
`
