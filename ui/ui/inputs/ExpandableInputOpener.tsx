import styled from 'styled-components'
import { transition } from '../../css/transition'
import { defaultBorderRadiusCSS } from '../borderRadius'
import { getColor } from '../theme/getters'
import { defaultInputHeight, inputBackgroundCSS } from './config'
import { UnstyledButton } from '../buttons/UnstyledButton'
import { centerContent } from '../../css/centerContent'
import { sameDimensions } from '../../css/sameDimensions'

export const ExpandableInputOpener = styled(UnstyledButton)`
  ${centerContent}
  ${defaultBorderRadiusCSS}
  ${transition}

  ${sameDimensions(defaultInputHeight)};

  ${inputBackgroundCSS};

  :hover {
    background: ${getColor('mistExtra')};
  }
`
