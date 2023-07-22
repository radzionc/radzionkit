import styled from 'styled-components'
import { defaultTransitionCSS } from '../animations/transitions'
import { defaultBorderRadiusCSS } from '../borderRadius'
import { getColor } from '../theme/getters'
import { centerContentCSS } from '../utils/centerContentCSS'
import { getSameDimensionsCSS } from '../utils/getSameDimensionsCSS'
import { defaultInputHeight, inputBackgroundCSS } from './config'
import { interactiveCSS } from '../utils/interactiveCSS'

export const ExpandableInputOpener = styled.button`
  all: unset;
  ${interactiveCSS}
  ${centerContentCSS}
  ${defaultBorderRadiusCSS}
  ${defaultTransitionCSS}

  ${getSameDimensionsCSS(defaultInputHeight)};

  ${inputBackgroundCSS};

  :hover {
    background: ${getColor('mistExtra')};
  }
`
