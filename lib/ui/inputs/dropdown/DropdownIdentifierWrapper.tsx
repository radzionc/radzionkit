import styled from 'styled-components'

import { centerContent } from '../../css/centerContent'
import { textInputHorizontalPadding } from '../../css/textInput'
import { toSizeUnit } from '../../css/toSizeUnit'

import { dropdownInputConfig } from './config'

export const DropdownIdentifierWrapper = styled.div`
  position: absolute;
  font-size: ${toSizeUnit(dropdownInputConfig.identifierSize)};
  left: ${toSizeUnit(textInputHorizontalPadding)};
  pointer-events: none;
  display: flex;
  ${centerContent};
`
