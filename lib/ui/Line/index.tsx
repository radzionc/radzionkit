import styled, { css } from "styled-components"

export const Line = styled.div<{ fullWidth?: boolean }>`
  min-height: 1px;
  flex: 1;
  background: ${({ theme }) => theme.colors.mist.toCssValue()};

  grid-column: 1/-1;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`
