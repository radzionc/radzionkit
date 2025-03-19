import { match } from '@lib/utils/match'
import { DefaultTheme } from 'styled-components'

import { ThemeColors } from './ThemeColors'

interface ThemeGetterParams {
  theme: DefaultTheme
}

type ColorName = keyof Pick<
  ThemeColors,
  'foreground' | 'mist' | 'alert' | 'primary' | 'text' | 'idle'
>

export const getHoverVariant =
  (color: ColorName) =>
  ({ theme }: ThemeGetterParams) =>
    match(color, {
      foreground: () =>
        theme.colors.foreground.getVariant({ l: (l: number) => l + 4 }),
      mist: () => theme.colors.mistExtra,
      alert: () =>
        theme.colors.alert.getVariant({ l: (l: number) => l * 0.92 }),
      primary: () =>
        theme.colors.primary.getVariant({ l: (l: number) => l * 0.92 }),
      text: () => theme.colors.contrast,
      idle: () => theme.colors.idle.getVariant({ l: (l: number) => l * 1.2 }),
    }).toCssValue()
