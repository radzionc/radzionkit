import { Text } from '@lib/ui/text'
import { getColor } from '@lib/ui/theme/getters'
import styled from 'styled-components'

export const PageTitle = styled(Text)`
  font-size: 32px;
  font-weight: 600;
  color: ${getColor('contrast')};
`
