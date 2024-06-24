import styled from 'styled-components'
import { verticalPadding } from '../css/verticalPadding'
import { toSizeUnit } from '../css/toSizeUnit'

export const checklistItemContentMinHeight = 24
export const checklistItemVerticalPadding = 8
export const checklistItemGap = 12

export const ChecklistItemFrame = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: ${toSizeUnit(checklistItemContentMinHeight)} 1fr;
  align-items: center;
  justify-items: start;
  gap: ${toSizeUnit(checklistItemGap)};
  font-weight: 500;
  font-size: 14px;
  ${verticalPadding(checklistItemVerticalPadding)};
`
