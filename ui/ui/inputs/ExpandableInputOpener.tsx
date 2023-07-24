import styled from 'styled-components'
import { defaultTransitionCSS } from '../animations/transitions'
import { defaultBorderRadiusCSS } from '../borderRadius'
import { getColor } from '../theme/getters'
import { centerContentCSS } from '../utils/centerContentCSS'
import { getSameDimensionsCSS } from '../utils/getSameDimensionsCSS'
import { defaultInputHeight, inputBackgroundCSS } from './config'
import { UnstyledButton } from '../buttons/UnstyledButton'

export const ExpandableInputOpener = styled(UnstyledButton)`
  ${centerContentCSS}
  ${defaultBorderRadiusCSS}
  ${defaultTransitionCSS}

  ${getSameDimensionsCSS(defaultInputHeight)};

  ${inputBackgroundCSS};

  :hover {
    background: ${getColor('mistExtra')};
  }
`
