import styled from 'styled-components'
import { verticalPadding } from '../css/verticalPadding'

export const ChecklistItemFrame = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 24px 1fr;
  align-items: center;
  justify-items: start;
  gap: 12px;
  font-weight: 500;
  ${verticalPadding(8)};
`
