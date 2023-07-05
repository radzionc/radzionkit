import styled, { css } from "styled-components"
import { getColor } from "../theme/getters"

export const Line = styled.div<{ fullWidth?: boolean }>`
  min-height: 1px;
  flex: 1;
  background: ${getColor("mist")};

  grid-column: 1/-1;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`
