import styled from 'styled-components'
import { defaultTransitionCSS } from '../animations/transitions'
import { defaultBorderRadiusCSS } from '../borderRadius'
import { getColor } from '../theme/getters'
import { defaultInputHeight, inputBackgroundCSS } from './config'
import { UnstyledButton } from '../buttons/UnstyledButton'
import { centerContent } from '../../css/centerContent'
import { sameDimensions } from '../../css/sameDimensions'

export const ExpandableInputOpener = styled(UnstyledButton)`
  ${centerContent}
  ${defaultBorderRadiusCSS}
  ${defaultTransitionCSS}

  ${sameDimensions(defaultInputHeight)};

  ${inputBackgroundCSS};

  :hover {
    background: ${getColor('mistExtra')};
  }
`
