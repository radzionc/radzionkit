import { DefaultTheme } from "styled-components";
import { HSLA } from "lib/ui/colors/HSLA";
import { sharedColors } from "./shared";

export const regularTextAlpha = 0.9;

export const lightTheme: DefaultTheme = {
  name: "light",
  colors: {
    ...sharedColors,
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
  },
  shadows: {
    small:
      "rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 2px 4px",
    medium:
      "rgb(15 15 15 / 5%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 3px 6px, rgb(15 15 15 / 20%) 0px 9px 24px",
  },
};
