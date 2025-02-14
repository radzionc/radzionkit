import styled from 'styled-components'
import { flagAspectRatio } from './config'
import { getColor } from '@lib/ui/theme/getters'
import { fitInOneEm } from '@lib/ui/css/fitInOneEm'

export const CountryFlagFrame = styled.svg`
  ${fitInOneEm(flagAspectRatio)};
  background: ${getColor('mist')};
`
