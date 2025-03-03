import { Panel } from '@lib/ui/css/panel'
import styled from 'styled-components'

import { centerContent } from '../css/centerContent'
import { interactive } from '../css/interactive'
import { transition } from '../css/transition'
import { getColor } from '../theme/getters'

export const CallOutPanel = styled(Panel)`
  ${interactive};
  color: ${getColor('contrast')};
  border: 2px dashed ${getColor('primary')};
  ${centerContent};

  ${transition};
  &:hover {
    background: ${getColor('foreground')};
  }
`
