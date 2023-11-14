import styled from 'styled-components'
import { Text } from '../text'
import { cropText } from '../css/cropText'
import { getColor } from '../theme/getters'

export const InputErrorText = styled(Text)`
  color: ${getColor('alert')};
  --height: 0.86em;
  line-height: var(--height);
  font-size: var(--height);
  min-height: var(--height);
  ${cropText};
`
