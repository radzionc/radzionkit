import styled from 'styled-components'

import { borderRadius } from '../css/borderRadius'
import { centerContent } from '../css/centerContent'
import { sameDimensions } from '../css/sameDimensions'
import { transition } from '../css/transition'
import { ExternalLink } from '../navigation/Link/ExternalLink'
import { getColor } from '../theme/getters'

export const SocialLink = styled(ExternalLink)`
  ${sameDimensions(40)}
  ${borderRadius.s}
  ${centerContent};
  font-size: 24px;
  color: ${getColor('contrast')};
  ${transition};

  &:hover {
    background: ${getColor('mist')};
  }
`
