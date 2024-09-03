import styled, { css } from 'styled-components'
import { vStack } from './stack'

export const centerContent = css`
  ${vStack({
    alignItems: 'center',
    justifyContent: 'center',
  })}
`

export const CenterContent = styled.div`
  ${centerContent}
`
