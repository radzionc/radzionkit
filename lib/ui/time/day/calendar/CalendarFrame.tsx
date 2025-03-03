import styled from 'styled-components'

import { toSizeUnit } from '../../../css/toSizeUnit'

import { calendarConfig } from './config'

export const CalendarFrame = styled.div`
  display: grid;
  grid-template-columns: repeat(7, ${toSizeUnit(calendarConfig.itemSize)});
  grid-auto-rows: ${toSizeUnit(calendarConfig.itemSize)};
`
