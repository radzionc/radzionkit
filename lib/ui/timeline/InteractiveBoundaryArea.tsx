import styled from 'styled-components'

export const InteractiveBoundaryArea = styled.div<{ y: number }>`
  position: absolute;
  width: 100%;
  cursor: row-resize;

  --height: 6px;
  height: var(--height);
  top: calc(${({ y }) => y}px - var(--height) / 2);
`
