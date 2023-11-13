import styled from 'styled-components'
import { textInput, textInputPadding } from '../../css/textInput'
import { toSizeUnit } from '../../css/toSizeUnit'
import { fixedOptionsInputConfig } from './config'
import { iconButtonSizeRecord } from '../../buttons/IconButton'

export const FixedOptionsInputTextInput = styled.input`
  ${textInput};
  padding-left: ${toSizeUnit(
    fixedOptionsInputConfig.identifierSize + textInputPadding * 2,
  )};
  padding-right: ${toSizeUnit(
    iconButtonSizeRecord[fixedOptionsInputConfig.iconButtonSize] * 2 +
      textInputPadding +
      fixedOptionsInputConfig.buttonsSpacing,
  )};
`
