import styled from 'styled-components'

import { Text } from '../text'

type InputLabelProps = {
  size?: number
  color?: string
  as?: React.ElementType
}

export const InputLabel = styled(Text).attrs<InputLabelProps>(
  ({ size = 13, color = 'supporting', as = 'div' }) => ({
    size,
    color,
    as,
  }),
)``
