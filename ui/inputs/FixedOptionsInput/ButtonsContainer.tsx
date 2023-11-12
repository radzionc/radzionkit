import styled from 'styled-components'
import { HStack } from '../../layout/Stack'
import { toSizeUnit } from '../../css/toSizeUnit'
import { textInputHeight, textInputPadding } from '../../css/textInput'
import { iconButtonSizeRecord } from '../../buttons/IconButton'
import { fixedOptionsInputConfig } from './config'

export const FixedOptionsInputButtonsContainer = styled(HStack)`
  position: absolute;
  gap: 4px;
  right: ${toSizeUnit(textInputPadding)};
  bottom: ${toSizeUnit(
    (textInputHeight -
      iconButtonSizeRecord[fixedOptionsInputConfig.iconButtonSize]) /
      2,
  )};
`
