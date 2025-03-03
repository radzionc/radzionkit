import styled from 'styled-components'

import { getColor } from '../theme/getters'

import { Text } from './'

export const SectionTitle = styled(Text)`
  color: ${getColor('contrast')};
  font-weight: 500;
  font-size: 16px;
`
