import styled from 'styled-components'

import { borderRadius } from '../css/borderRadius'
import { getColor } from '../theme/getters'

export const FloatingOptionsContainer = styled.div`
  ${borderRadius.m};
  overflow-y: auto;
  outline: none;
  border: 1px solid ${getColor('foregroundExtra')};

  display: flex;
  flex-direction: column;
  gap: 4px;

  padding: 4px;
  background: ${getColor('foreground')};
  z-index: 1;
`
