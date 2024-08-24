import styled, { css } from 'styled-components'

import { centerContent } from '@lib/ui/css/centerContent'
import { getColor } from '@lib/ui/theme/getters'

export const pageTitle = css`
  font-size: 18px;
  font-weight: 600;
  ${centerContent};
  color: ${getColor('contrast')};
`

export const PageTitle = styled.h1`
  ${pageTitle}
`
