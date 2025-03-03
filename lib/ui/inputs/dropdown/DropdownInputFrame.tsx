import styled from 'styled-components'

import { iconButtonSizeRecord } from '../../buttons/IconButton'
import { textInput, textInputHorizontalPadding } from '../../css/textInput'
import { toSizeUnit } from '../../css/toSizeUnit'

import { dropdownInputConfig } from './config'

export const DropdownInputFrame = styled.input`
  ${textInput};
  padding-left: ${toSizeUnit(
    dropdownInputConfig.identifierSize + textInputHorizontalPadding * 2,
  )};
  padding-right: ${toSizeUnit(
    iconButtonSizeRecord[dropdownInputConfig.iconButtonSize] * 2 +
      textInputHorizontalPadding +
      dropdownInputConfig.buttonsSpacing,
  )};
`
