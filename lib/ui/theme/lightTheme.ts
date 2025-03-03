import { DefaultTheme } from 'styled-components'

import { generateLabelColorGetter } from '../colors/generateLabelColorGetter'
import { HSLA } from '../colors/HSLA'

import { sharedColors } from './shared'

export const regularTextAlpha = 0.9
const primary = new HSLA(235, 55, 63)

export const lightTheme: DefaultTheme = {
  name: 'light',
  colors: {
    ...sharedColors,

    primary,

    success: new HSLA(137, 66, 36),
    alert: new HSLA(0, 66, 52),
    idle: new HSLA(32, 79, 63),

    foreground: new HSLA(60, 11, 98),
    foregroundExtra: new HSLA(60, 11, 96),
    background: new HSLA(0, 0, 100),

    text: new HSLA(60, 6, 20),
    textSupporting: new HSLA(45, 19, 8, 0.6),
    textShy: new HSLA(45, 8, 20, 0.65),
    textPrimary: primary,

    mist: new HSLA(45, 8, 20, 0.06),
    mistExtra: new HSLA(45, 8, 20, 0.16),

    overlay: new HSLA(0, 0, 0, 0.4),

    getLabelColor: generateLabelColorGetter({
      saturation: 64,
      lightness: 64,
    }),

    contrast: new HSLA(0, 0, 0),
  },
  shadows: {
    small:
      'rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px',
    medium:
      'rgb(15 15 15 / 5%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 3px 6px, rgb(15 15 15 / 20%) 0px 9px 24px',
  },
}
