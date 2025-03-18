import styled from 'styled-components'

export interface Props {
  isUnderlined?: boolean
}

export const UnstyledAnchor = styled.a<Props>`
  color: inherit;
  cursor: pointer;
  text-decoration: ${({ isUnderlined }) =>
    isUnderlined ? 'underline' : 'none'};
`
