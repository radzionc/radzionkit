import styled from 'styled-components'
import { toSizeUnit } from '../../css/toSizeUnit'
import { textInputPadding } from '../../css/textInput'
import { fixedOptionsInputConfig } from './config'

export const FixedOptionsInputIdentifierWrapper = styled.div`
  position: absolute;
  font-size: ${toSizeUnit(fixedOptionsInputConfig.identifierSize)};
  left: ${toSizeUnit(textInputPadding)};
  pointer-events: none;
  display: flex;
`
