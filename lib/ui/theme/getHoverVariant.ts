import { match } from '@lib/utils/match'
import { DefaultTheme } from 'styled-components'

import { ThemeColors } from './ThemeColors'

interface ThemeGetterParams {
  theme: DefaultTheme
}

type ColorName = keyof Pick<
  ThemeColors,
  'foreground' | 'mist' | 'alert' | 'primary'
>

export const getHoverVariant =
  (color: ColorName) =>
  ({ theme }: ThemeGetterParams) =>
    match(color, {
      foreground: () => theme.colors.foreground.getVariant({ l: (l) => l + 4 }),
      mist: () => theme.colors.mistExtra,
      alert: () => theme.colors.alert.getVariant({ l: (l) => l * 0.92 }),
      primary: () => theme.colors.primary.getVariant({ l: (l) => l * 0.92 }),
    }).toCssValue()
