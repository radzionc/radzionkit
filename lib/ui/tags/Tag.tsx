import styled from 'styled-components'

import { HSLA } from '../colors/HSLA'
import { Text } from '../text'
import { borderRadius } from '../css/borderRadius'
import { coloredTag } from '../css/coloredTag'

export const Tag = styled(Text)<{ $color: HSLA }>`
  ${borderRadius.s};
  padding: 4px 8px;
  font-weight: 600;
  font-size: 14px;
  ${({ $color }) => coloredTag($color)}
`
