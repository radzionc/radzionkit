import { createGlobalStyle } from "styled-components"
import { themedScrollbarCSS } from "./utils/themedScrollbarCSS"

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html, body, #root, #__next {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  #root {
    isolation: isolate;
  }

  * {
    font-family: Inter, sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.background.toCssValue()};
    color: ${({ theme }) => theme.colors.text.toCssValue()};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }

  ${themedScrollbarCSS}
`
