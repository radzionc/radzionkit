import { createContext, useMemo } from "react";
import { useMedia } from "react-use";
import { ComponentWithChildrenProps } from "lib/shared/props";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { darkTheme } from "lib/ui/theme/darkTheme";

import { lightTheme } from "./lightTheme";
import { ThemeName } from "./ThemeName";
import { ThemePreference } from "./ThemePreference";
import { createContextHook } from "lib/shared/utils/createContextHook";

const themeRecord: Record<ThemeName, DefaultTheme> = {
  light: lightTheme,
  dark: darkTheme,
};

interface PrefferedThemeState {
  prefferedTheme: ThemePreference;
  setPrefferedTheme: (theme: ThemePreference) => void;
}

const PrefferedThemeContext = createContext<PrefferedThemeState | undefined>(
  undefined
);

type Props = PrefferedThemeState & ComponentWithChildrenProps;

export const PrefferedThemeProvider = ({
  prefferedTheme,
  setPrefferedTheme,
  children,
}: Props) => {
  const isSystemThemeDark = useMedia("(prefers-color-scheme: dark)", false);
  const currentSystemTheme = isSystemThemeDark ? "dark" : "light";

  const theme = useMemo(() => {
    const prefferedThemeName =
      prefferedTheme === "system" ? currentSystemTheme : prefferedTheme;

    return themeRecord[prefferedThemeName];
  }, [currentSystemTheme, prefferedTheme]);

  return (
    <PrefferedThemeContext.Provider
      value={{ prefferedTheme, setPrefferedTheme }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </PrefferedThemeContext.Provider>
  );
};

export const usePrefferedTheme = createContextHook(
  PrefferedThemeContext,
  "PrefferedThemeContext"
);
