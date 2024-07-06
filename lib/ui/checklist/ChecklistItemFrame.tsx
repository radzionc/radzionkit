import styled from 'styled-components'
import { verticalPadding } from '../css/verticalPadding'
import { toSizeUnit } from '../css/toSizeUnit'
import { tightListItemConfig } from '../list/tightListItemConfig'

export const ChecklistItemFrame = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: ${toSizeUnit(tightListItemConfig.lineHeight)} 1fr;
  align-items: center;
  justify-items: start;
  gap: ${toSizeUnit(tightListItemConfig.gap)};
  font-weight: 500;
  font-size: 14px;
  ${verticalPadding(tightListItemConfig.verticalPadding)};
`
