### 1. Copy lib folder to your React project

### 2. Install dependencies

```sh
yarn add @floating-ui/dom date-fns focus-trap-react next-sitemap @floating-ui/react react-spring react-use styled-components react-dropzone
yarn add --dev @types/react @types/react-dom @types/styled-components eslint eslint-config-next typescript
```

### 3. Setup local storage

At `src/state/persistentStorage.ts`

```ts
import { MockStorage } from "lib/state/MockStorage"
import { LocalStorage } from "lib/state/LocalStorage"
import { createUsePersistantStorageValueHook } from "lib/state/createUsePersistantStorageValueHook"

export enum PersistentStorageKey {
  ThemePreference = "themePreference",
}

export const persistentStorage =
  typeof window !== "undefined"
    ? new LocalStorage<PersistentStorageKey>()
    : new MockStorage<PersistentStorageKey>()

export const usePersistentStorageValue =
  createUsePersistantStorageValueHook<PersistentStorageKey>(persistentStorage)
```

### 4. Setup theme

At `src/ui/ThemeProvider.tsx`

```tsx
import { ComponentWithChildrenProps } from "lib/shared/props"
import { PrefferedThemeProvider } from "lib/ui/theme/PrefferedThemeProvider"
import { ThemePreference } from "lib/ui/theme/ThemePreference"
import {
  PersistentStorageKey,
  usePersistentStorageValue,
} from "state/persistentStorage"

export const ThemeProvider = ({ children }: ComponentWithChildrenProps) => {
  const [prefferedTheme, setPrefferedTheme] =
    usePersistentStorageValue<ThemePreference>(
      PersistentStorageKey.ThemePreference,
      "system"
    )

  return (
    <PrefferedThemeProvider
      prefferedTheme={prefferedTheme}
      setPrefferedTheme={setPrefferedTheme}
    >
      {children}
    </PrefferedThemeProvider>
  )
}
```

### 5. Finish setup

```tsx
import { GlobalStyle } from "lib/ui/GlobalStyle"
import { ThemeProvider } from "ui/ThemeProvider"

export const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <p>Your app goes here</p>
    </ThemeProvider>
  )
}
```
