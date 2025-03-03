import styled from 'styled-components'

import { centerContent } from '../../../css/centerContent'
import { CheckIcon } from '../../../icons/CheckIcon'
import { getColor } from '../../../theme/getters'

import { IdentifierPlaceholder } from './IdentifierPlaceholder'

const Container = styled(IdentifierPlaceholder)`
  color: ${getColor('success')};
  ${centerContent};
  svg {
    font-size: 0.6em;
  }
`

export const SelectedOptionIdentifier = () => (
  <Container>
    <CheckIcon />
  </Container>
)
