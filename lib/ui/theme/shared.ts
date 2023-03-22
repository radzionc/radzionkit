import { HSLA } from "../colors/HSLA";
import { generatePaleteCollorGetter } from "../colors/palette";

export const sharedColors = {
  primary: new HSLA(210, 77, 51),
  primaryHover: new HSLA(207, 100, 41),

  attention: new HSLA(4, 69, 62),
  attentionHover: new HSLA(4, 58, 55),

  alert: new HSLA(0, 79, 63),
  success: new HSLA(130, 56, 52),

  getPaletteColor: generatePaleteCollorGetter(56, 52),
} as const;
