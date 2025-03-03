import styled from 'styled-components'

import { HSLA } from '../colors/HSLA'
import { borderRadius } from '../css/borderRadius'
import { coloredTag } from '../css/coloredTag'
import { Text } from '../text'

export const Tag = styled(Text)<{ $color: HSLA }>`
  ${borderRadius.s};
  padding: 4px 8px;
  font-weight: 600;
  font-size: 14px;
  ${({ $color }) => coloredTag($color)}
`
