import styled from 'styled-components'
import { transition } from '../../css/transition'
import { getColor } from '../theme/getters'
import { defaultInputHeight, inputBackgroundCSS } from './config'
import { centerContent } from '../../css/centerContent'
import { sameDimensions } from '../../css/sameDimensions'
import { UnstyledButton } from '../../buttons/UnstyledButton'
import { borderRadius } from '../../css/borderRadius'

export const ExpandableInputOpener = styled(UnstyledButton)`
  ${centerContent}
  ${borderRadius.m}
  ${transition}

  ${sameDimensions(defaultInputHeight)};

  ${inputBackgroundCSS};

  :hover {
    background: ${getColor('mistExtra')};
  }
`
