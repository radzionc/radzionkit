import { HSLA } from '../colors/HSLA'

export const regularTextAlpha = 0.9

export type ThemeColors = {
  primary: HSLA
  primaryHover: HSLA

  attention: HSLA
  attentionHover: HSLA

  alert: HSLA
  idle: HSLA
  success: HSLA

  foreground: HSLA
  background: HSLA

  text: HSLA
  textSupporting: HSLA
  textSupporting2: HSLA
  textSupporting3: HSLA

  backgroundGlass: HSLA
  backgroundGlass2: HSLA

  overlay: HSLA

  outlinedHover: HSLA

  contrast: HSLA

  getPaletteColor: (index: number) => HSLA
}
