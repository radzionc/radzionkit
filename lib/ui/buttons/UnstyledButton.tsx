import styled from 'styled-components'
import { interactive } from '../css/interactive'

export const UnstyledButton = styled.button`
  ${interactive};
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;
  line-height: inherit;
`

UnstyledButton.defaultProps = {
  type: 'button',
}
