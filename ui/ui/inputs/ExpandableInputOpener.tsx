import styled from 'styled-components'
import { defaultTransitionCSS } from '../animations/transitions'
import { defaultBorderRadiusCSS } from '../borderRadius'
import { getColor } from '../theme/getters'
import { getSameDimensionsCSS } from '../utils/getSameDimensionsCSS'
import { defaultInputHeight, inputBackgroundCSS } from './config'
import { UnstyledButton } from '../buttons/UnstyledButton'
import { centerContent } from '../../css/centerContent'

export const ExpandableInputOpener = styled(UnstyledButton)`
  ${centerContent}
  ${defaultBorderRadiusCSS}
  ${defaultTransitionCSS}

  ${getSameDimensionsCSS(defaultInputHeight)};

  ${inputBackgroundCSS};

  :hover {
    background: ${getColor('mistExtra')};
  }
`
