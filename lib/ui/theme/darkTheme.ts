import { DefaultTheme } from 'styled-components'
import { sharedColors } from './shared'
import { HSLA } from '../colors/HSLA'
import { generateLabelColorGetter } from '../colors/generateLabelColorGetter'

const backgroundHue = 0
const backgroundSaturation = 0

export const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    ...sharedColors,

    success: new HSLA(130, 56, 52),
    alert: new HSLA(0, 79, 63),
    idle: new HSLA(32, 79, 48),

    foreground: new HSLA(backgroundHue, backgroundSaturation, 12),
    background: new HSLA(backgroundHue, backgroundSaturation, 8),
    text: new HSLA(0, 0, 100, 0.81),
    textSupporting: new HSLA(0, 0, 61),
    textShy: new HSLA(0, 0, 100, 0.28),

    mist: new HSLA(0, 0, 100, 0.06),
    mistExtra: new HSLA(0, 0, 100, 0.13),

    overlay: new HSLA(backgroundHue, backgroundSaturation, 1, 0.8),

    getLabelColor: generateLabelColorGetter({
      saturation: 56,
      lightness: 52,
    }),

    contrast: new HSLA(0, 0, 100),
  },
  shadows: {
    small:
      'rgb(15 15 15 / 20%) 0px 0px 0px 1px, rgb(15 15 15 / 20%) 0px 2px 4px',
    medium:
      'rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 20%) 0px 3px 6px, rgb(15 15 15 / 40%) 0px 9px 24px;',
  },
}
