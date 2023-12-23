import { borderRadius } from '@radzionkit/ui/css/borderRadius'
import { getColor } from '@radzionkit/ui/theme/getters'
import styled from 'styled-components'

export const ResumeContainer = styled.div`
  width: 880px;
  aspect-ratio: 1 / 1.414;

  display: flex;
  flex-direction: column;
  gap: 2px;
  background: ${getColor('foreground')};
  border: 2px solid ${getColor('foreground')};

  ${borderRadius.m}
  overflow: hidden;

  > * {
    background: ${getColor('background')};
    padding: 20px;
  }

  @media print {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`
