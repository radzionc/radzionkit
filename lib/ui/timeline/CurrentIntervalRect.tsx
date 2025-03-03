import { centerContent } from '@lib/ui/css/centerContent'
import styled, { css } from 'styled-components'

import { IntervalRect } from './IntervalRect'

export const CurrentIntervalRect = styled(IntervalRect)`
  ${centerContent}

  ${({ $color }) => css`
    background: ${$color.getVariant({ a: () => 0.12 }).toCssValue()};
    border: 2px solid ${$color.toCssValue()};
    color: ${$color.toCssValue()};
  `}
`
