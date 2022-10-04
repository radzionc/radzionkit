import { useEffect, useMemo, useState } from "react";
import { useMedia } from "react-use";
import { ComponentWithChildrenProps } from "lib/shared/props";
import {
  DefaultTheme,
  ThemeProvider as StyledComponentsThemeProvider,
} from "styled-components";
import { darkTheme } from "lib/ui/theme/darkTheme";

import { lightTheme } from "./lightTheme";
import { useThemePreference } from "./useThemePreference";

export const ThemeProvider = ({ children }: ComponentWithChildrenProps) => {
  const [themePreference] = useThemePreference();

  const isSystemThemeDark = useMedia("(prefers-color-scheme: dark)", false);

  const [theme, setTheme] = useState<DefaultTheme>(darkTheme);
  useEffect(() => {
    if (themePreference === "system") {
      setTheme(isSystemThemeDark ? darkTheme : lightTheme);
    }

    setTheme(themePreference === "dark" ? darkTheme : lightTheme);
  }, [isSystemThemeDark, themePreference]);

  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};
