import styled from 'styled-components'
import { toSizeUnit } from '../../css/toSizeUnit'
import { identifierSize } from './config'
import { textInputPadding } from '../../css/textInput'

export const IdentifierWrapper = styled.div`
  position: absolute;
  font-size: ${toSizeUnit(identifierSize)};
  left: ${toSizeUnit(textInputPadding)};
  pointer-events: none;
  display: flex;
`
