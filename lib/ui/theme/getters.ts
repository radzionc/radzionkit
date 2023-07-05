import { DefaultTheme } from "styled-components"
import { ThemeColors } from "./ThemeColors"

interface ThemeGetterParams {
  theme: DefaultTheme
}

type ColorName = keyof Omit<ThemeColors, "getPaletteColor">

export const getColor =
  (color: ColorName) =>
  ({ theme }: ThemeGetterParams) =>
    theme.colors[color].toCssValue()

type BooleanMatcher = { true: string; false: string }
type Matcher<T extends string | number | symbol> = { [key in T]: string }
type MatcherType<T> = Extract<T, "string" | "number" | "symbol">

export const matchColor =
  <T extends ThemeGetterParams, K extends keyof T, U = T[K]>(
    variable: K,
    matcher: U extends boolean ? BooleanMatcher : Matcher<MatcherType<U>>
  ) =>
  (params: T) => {
    if (typeof params[variable] === "boolean") {
      const booleanMatcher = matcher as BooleanMatcher
      return params[variable] ? booleanMatcher.true : booleanMatcher.false
    }

    return (matcher as Matcher<MatcherType<U>>)[
      params[variable] as unknown as MatcherType<U>
    ]
  }
