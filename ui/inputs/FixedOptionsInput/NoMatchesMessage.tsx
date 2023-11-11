import styled from 'styled-components'
import { horizontalPadding } from '../../css/horizontalPadding'
import { textInputPadding } from '../../css/textInput'
import { verticalPadding } from '../../css/verticalPadding'

const Container = styled.div`
  ${horizontalPadding(textInputPadding)};
  ${verticalPadding(8)}
`

export const NoMatchesMessage = () => <Container>No results</Container>
