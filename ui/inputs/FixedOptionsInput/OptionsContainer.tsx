import styled from 'styled-components'
import { getColor } from '../../theme/getters'
import { toSizeUnit } from '../../css/toSizeUnit'
import { textInputBorderRadius } from '../../css/textInput'

export const FixedOptionsInputOptionsContainer = styled.div`
  background: ${getColor('foreground')};
  border: 1px solid ${getColor('mist')};

  border-radius: ${toSizeUnit(textInputBorderRadius)};
  overflow: hidden;
  max-height: 280px;
  overflow-y: auto;

  z-index: 1;
`
