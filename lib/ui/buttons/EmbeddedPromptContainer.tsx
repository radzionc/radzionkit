import { UnstyledButton } from './UnstyledButton'
import styled from 'styled-components'
import { interactive } from '../css/interactive'
import { verticalPadding } from '../css/verticalPadding'
import { getColor } from '../theme/getters'

export const EmbeddedPromptContainer = styled(UnstyledButton)`
  ${interactive};
  ${verticalPadding(12)};
  width: 100%;

  &:hover {
    background: ${getColor('foreground')};
    color: ${getColor('contrast')};
  }
`
