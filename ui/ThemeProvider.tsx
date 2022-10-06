import { ComponentWithChildrenProps } from "lib/shared/props";
import { PrefferedThemeProvider } from "lib/ui/theme/PrefferedThemeProvider";
import { ThemePreference } from "lib/ui/theme/ThemePreference";
import {
  PersistentStorageKey,
  usePersistentStorageValue,
} from "state/persistentStorage";

export const ThemeProvider = ({ children }: ComponentWithChildrenProps) => {
  const [prefferedTheme, setPrefferedTheme] =
    usePersistentStorageValue<ThemePreference>(
      PersistentStorageKey.ThemePreference,
      "system"
    );

  return (
    <PrefferedThemeProvider
      prefferedTheme={prefferedTheme}
      setPrefferedTheme={setPrefferedTheme}
    >
      {children}
    </PrefferedThemeProvider>
  );
};
