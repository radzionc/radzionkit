import styled from 'styled-components'
import { toSizeUnit } from '../../../css/toSizeUnit'
import { textInputPadding } from '../../../css/textInput'
import { dropdownInputConfig } from '../config'

export const FixedOptionsInputIdentifierWrapper = styled.div`
  position: absolute;
  font-size: ${toSizeUnit(dropdownInputConfig.identifierSize)};
  left: ${toSizeUnit(textInputPadding)};
  pointer-events: none;
  display: flex;
`
