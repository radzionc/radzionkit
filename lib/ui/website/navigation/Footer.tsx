import styled from 'styled-components'

import { centeredContentColumn } from '../../css/centeredContentColumn'
import { verticalPadding } from '../../css/verticalPadding'
import { getColor } from '../../theme/getters'
import { websiteConfig } from '../config'

export const Footer = styled.div`
  ${centeredContentColumn({
    contentMaxWidth: websiteConfig.contentMaxWidth,
  })};
  ${verticalPadding(12)};
  color: ${getColor('textSupporting')};
  font-size: 14px;
`
