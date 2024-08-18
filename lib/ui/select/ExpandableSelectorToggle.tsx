import styled from 'styled-components'
import { CollapsableStateIndicator } from '../layout/CollapsableStateIndicator'
import { getColor } from '../theme/getters'

export const ExpandableSelectorToggle = styled(CollapsableStateIndicator)`
  font-size: 16px;
  color: ${getColor('textSupporting')};
`
