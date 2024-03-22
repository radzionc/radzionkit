import styled, { css } from 'styled-components'

export const ExpandableSectionContent = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) =>
    !isOpen &&
    css`
      opacity: 0;
      overflow: hidden;
      visibility: hidden;
      height: 0;
    `}
`
