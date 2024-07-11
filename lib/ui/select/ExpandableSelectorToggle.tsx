import styled from 'styled-components'
import { CollapsableStateIndicator } from '../layout/CollapsableStateIndicator'
import { transition } from '../css/transition'
import { getColor } from '../theme/getters'

export const ExpandableSelectorToggle = styled(CollapsableStateIndicator)`
  font-size: 16px;
  ${transition};
  color: ${getColor('textSupporting')};
`
