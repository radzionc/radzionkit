import { DefaultTheme } from "styled-components";
import { ThemeColors } from "./ThemeColors";

interface ThemeGetterParams {
  theme: DefaultTheme
}

export const getColor = (color: keyof Omit<ThemeColors, 'getPaletteColor'>) =>
  ({ theme }: ThemeGetterParams) => theme.colors[color].toCssValue()
