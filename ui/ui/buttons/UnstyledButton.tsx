import styled from 'styled-components'
import { interactiveCSS } from '../utils/interactiveCSS'

export const UnstyledButton = styled.button`
  ${interactiveCSS};
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
