import styled from 'styled-components'
import { IdentifierPlaceholder } from './IdentifierPlaceholder'
import { getColor } from '../../theme/getters'
import { centerContent } from '../../css/centerContent'
import { CheckIcon } from '../../icons/CheckIcon'

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
