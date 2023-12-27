import styled from 'styled-components'
import { getColor } from '../theme/getters'
import { fitInOneEm } from '../css/fitInOneEm'
import { flagAspectRatio } from './config'

export const CountryFlagFrame = styled.svg`
  ${fitInOneEm(flagAspectRatio)};
  background: ${getColor('mist')};
`
