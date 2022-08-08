import { DefaultTheme } from 'styled-components'
import { HSLA } from 'ui/colors/HSLA'
import { generatePaleteCollorGetter } from 'ui/colors/palette'

const primaryLightness = 52

export const regularTextAlpha = 0.9

export const lightTheme: DefaultTheme = {
  name: 'light',
  colors: {
    primary: new HSLA(197, 71, 52),
    primaryHover: new HSLA(195, 94, 41),

    attention: new HSLA(4, 69, 62),
    attentionHover: new HSLA(4, 58, 55),

    alert: new HSLA(0, 79, 63),
    success: new HSLA(130, 56, primaryLightness),

    foreground: new HSLA(60, 11, 98),
    background: new HSLA(0, 0, 100),

    text: new HSLA(60, 6, 20),
    textSupporting: new HSLA(45, 19, 8, 0.6),
    textSupporting2: new HSLA(45, 8, 20, 0.65),
    textSupporting3: new HSLA(45, 8, 81),

    backgroundGlass: new HSLA(45, 8, 20, 0.08),
    backgroundGlass2: new HSLA(45, 8, 20, 0.16),

    overlay: new HSLA(0, 0, 0, 0.4),

    outlinedHover: new HSLA(0, 0, 88),

    white: new HSLA(0, 0, 100),

    getPaletteColor: generatePaleteCollorGetter(52, 48),
  },
  shadows: {
    small:
      'rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px',
    mediud:
      'rgb(15 15 15 / 5%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 3px 6px, rgb(15 15 15 / 20%) 0px 9px 24px',
  },
}
