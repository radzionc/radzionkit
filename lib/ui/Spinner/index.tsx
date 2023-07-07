import styled, { keyframes } from "styled-components"

const animationForRotation = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.span`
  width: 1em;
  height: 1em;
  display: inline-block;

  border: 0.08em solid;
  border-radius: 100%;
  border-top-color: transparent;

  animation: ${animationForRotation} 1s infinite linear;
`
