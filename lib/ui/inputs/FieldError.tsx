import styled from 'styled-components'

import { cropText } from '../css/cropText'
import { Text } from '../text'
import { getColor } from '../theme/getters'

export const FieldError = styled(Text)`
  color: ${getColor('alert')};
  line-height: 1.2em;
  font-size: 0.86em;
  min-height: 1.2em;
  ${cropText};
`
