import { HSLA } from "../colors/HSLA"

export const regularTextAlpha = 0.9

export type ThemeColors = {
  primary: HSLA

  attention: HSLA

  alert: HSLA
  idle: HSLA
  success: HSLA

  foreground: HSLA
  background: HSLA

  text: HSLA
  textSupporting: HSLA
  textShy: HSLA

  mist: HSLA
  mistExtra: HSLA

  overlay: HSLA

  contrast: HSLA

  white: HSLA
  transparent: HSLA

  getLabelColor: (index: number) => HSLA
}
