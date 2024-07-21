import styled from 'styled-components'
import { HStack } from '../layout/Stack'
import { tightListItemConfig } from '../list/tightListItemConfig'
import { toSizeUnit } from '../css/toSizeUnit'

export const EmbeddedPromptContentFrame = styled(HStack)`
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: ${toSizeUnit(tightListItemConfig.lineHeight)};
`
