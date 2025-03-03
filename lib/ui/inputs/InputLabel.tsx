import styled from 'styled-components'

import { Text } from '../text'

export const InputLabel = styled(Text).attrs(
  ({ size = 13, color = 'supporting', as = 'div' }) => ({
    size,
    color,
    as,
  }),
)``
