import { fitInOneEm } from '@lib/ui/css/fitInOneEm'
import { getColor } from '@lib/ui/theme/getters'
import styled from 'styled-components'

import { flagAspectRatio } from './config'

export const CountryFlagFrame = styled.svg`
  ${fitInOneEm(flagAspectRatio)};
  background: ${getColor('mist')};
`
