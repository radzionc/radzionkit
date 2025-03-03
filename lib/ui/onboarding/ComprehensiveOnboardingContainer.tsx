import styled from 'styled-components'

import { getColor } from '../theme/getters'

export const ComprehensiveOnboardingContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  height: 100%;

  > * {
    &:first-child {
      background: ${getColor('foreground')};
    }

    &:last-child {
      border-left: 1px dashed ${getColor('mistExtra')};
    }
  }
`
