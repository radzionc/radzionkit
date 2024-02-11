import styled from 'styled-components'
import { getColor } from '../theme/getters'
import { defaultInputHeight } from './config'
import { UnstyledButton } from '../buttons/UnstyledButton'
import { borderRadius } from '../css/borderRadius'
import { centerContent } from '../css/centerContent'
import { sameDimensions } from '../css/sameDimensions'
import { transition } from '../css/transition'

export const ExpandableInputOpener = styled(UnstyledButton)`
  ${centerContent}
  ${borderRadius.m}
  ${transition}

  ${sameDimensions(defaultInputHeight)};

  background: ${getColor('foreground')};

  &:hover {
    background: ${getColor('mistExtra')};
  }
`
