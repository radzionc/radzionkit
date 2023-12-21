import styled from 'styled-components'
import { textInput, textInputPadding } from '../../css/textInput'
import { toSizeUnit } from '../../css/toSizeUnit'
import { iconButtonSizeRecord } from '../../buttons/IconButton'
import { dropdownInputConfig } from './config'

export const DropdownInputFrame = styled.input`
  ${textInput};
  padding-left: ${toSizeUnit(
    dropdownInputConfig.identifierSize + textInputPadding * 2,
  )};
  padding-right: ${toSizeUnit(
    iconButtonSizeRecord[dropdownInputConfig.iconButtonSize] * 2 +
      textInputPadding +
      dropdownInputConfig.buttonsSpacing,
  )};
`
