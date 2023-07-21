import styled from "styled-components"
import { centerContentCSS } from "./utils/centerContentCSS"

export const CenterAbsolutely = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  ${centerContentCSS};
`
