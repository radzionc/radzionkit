import styled from 'styled-components'
import { Text } from './'
import { getColor } from '../theme/getters'

export const SectionTitle = styled(Text)`
  color: ${getColor('contrast')};
  font-weight: 500;
  font-size: 16px;
`
