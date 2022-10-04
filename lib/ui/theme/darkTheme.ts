import { DefaultTheme } from "styled-components";
import { HSLA } from "lib/ui/colors/HSLA";
import { generatePaleteCollorGetter } from "lib/ui/colors/palette";

const primaryLightness = 52;

const backgroundHue = 0;
const backgroundSaturation = 0;

const backgroundLightness = 10;

export const regularTextAlpha = 0.9;

export const darkTheme: DefaultTheme = {
  name: "dark",
  colors: {
    primary: new HSLA(197, 71, 52),
    primaryHover: new HSLA(195, 94, 41),

    attention: new HSLA(4, 69, 62),
    attentionHover: new HSLA(4, 58, 55),

    alert: new HSLA(0, 79, 63),
    success: new HSLA(130, 56, primaryLightness),

    foreground: new HSLA(
      backgroundHue,
      backgroundSaturation,
      backgroundLightness + 3
    ),
    background: new HSLA(
      backgroundHue,
      backgroundSaturation,
      backgroundLightness
    ),
    text: new HSLA(0, 0, 100, 0.81),
    textSupporting: new HSLA(0, 0, 61),
    textSupporting2: new HSLA(0, 0, 100, 0.44),
    textSupporting3: new HSLA(0, 0, 100, 0.28),

    backgroundGlass: new HSLA(0, 0, 100, 0.06),
    backgroundGlass2: new HSLA(0, 0, 100, 0.13),

    overlay: new HSLA(backgroundHue, backgroundSaturation, 1, 0.8),

    outlinedHover: new HSLA(0, 0, 16),

    white: new HSLA(0, 0, 100),

    getPaletteColor: generatePaleteCollorGetter(56, 52),
  },
  shadows: {
    small:
      "rgb(15 15 15 / 20%) 0px 0px 0px 1px, rgb(15 15 15 / 20%) 0px 2px 4px",
    mediud:
      "rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 20%) 0px 3px 6px, rgb(15 15 15 / 40%) 0px 9px 24px;",
  },
};
