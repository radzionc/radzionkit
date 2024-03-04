import styled from 'styled-components'
import { getColor } from '../theme/getters'
import { UnstyledButton } from '../buttons/UnstyledButton'
import { borderRadius } from '../css/borderRadius'
import { centerContent } from '../css/centerContent'
import { sameDimensions } from '../css/sameDimensions'
import { transition } from '../css/transition'
import { textInputHeight } from '../css/textInput'

export const ExpandableInputOpener = styled(UnstyledButton)`
  ${centerContent}
  ${borderRadius.m}
  ${transition}

  ${sameDimensions(textInputHeight)};

  background: ${getColor('foreground')};

  &:hover {
    background: ${getColor('mistExtra')};
  }
`
