import styled from 'styled-components'
import { Text } from '../text'
import { cropText } from '../css/cropText'
import { getColor } from '../theme/getters'

export const FieldError = styled(Text)`
  color: ${getColor('alert')};
  --height: 0.86em;
  line-height: 1.2;
  font-size: var(--height);
  min-height: var(--height);
  ${cropText};
`
