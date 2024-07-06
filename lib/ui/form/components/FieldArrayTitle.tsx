import styled from 'styled-components'
import { Text } from '../../text'
import { getColor } from '../../theme/getters'

export const FieldArrayTitle = styled(Text)`
  font-size: 12px;
  font-weight: 500;
  color: ${getColor('textSupporting')};
`
