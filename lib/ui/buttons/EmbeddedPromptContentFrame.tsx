import { HStack } from '@lib/ui/css/stack'
import styled from 'styled-components'

import { toSizeUnit } from '../css/toSizeUnit'
import { tightListItemConfig } from '../list/tightListItemConfig'

export const EmbeddedPromptContentFrame = styled(HStack)`
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: ${toSizeUnit(tightListItemConfig.lineHeight)};
`
