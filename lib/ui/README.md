# @lib/ui

This package provides a comprehensive library of React components and hooks, meticulously designed to cover all facets of a modern user interface. This package includes a wide range of components such as buttons, forms, modals, and navigation bars, along with utility hooks and services for authentication, analytics, and state management. It's built to empower developers with the tools they need to create elegant, responsive, and accessible user experiences with ease.

## Getting Started

1. **For NextJS Projects Only:** Update your `_document.tsx` file by extending the `StyledComponentsDocument` from the `@lib/next-ui` package, in order to integrate support for the `styled-components` library used in the `@lib/ui` package.

```tsx
import { StyledComponentsDocument } from '@lib/next-ui/StyledComponentsDocument'

class MyDocument extends StyledComponentsDocument {
  // ...
}
```

2. **For NextJS Projects Only:** Update your `next.config.js` to set `styledComponents` to `true` in the compiler options for proper styling, and include UI package in `transpilePackages` to ensure Next.js correctly compiles and includes the UI package from the monorepo.

```javascript
const nextConfig = {
  // ...
  compiler: {
    styledComponents: true,
  },
  transpilePackages: ['@lib/ui'],
}
```

3. Add a `styled.d.ts` to your project and include the following content to integrate RadzionKit's theme with `styled-components`' default theme:

```typescript
import 'styled-components';
import { Theme } from '@lib/ui/theme/Theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
```

4. **Add `persistentState` File for Local Storage Interaction:** Place a `persistentState` file in the `state` folder of your app package to enhance local storage interaction.

```tsx
import { TemporaryStorage } from '@lib/ui/state/TemporaryStorage'
import { LocalStorage } from '@lib/ui/state/LocalStorage'
import { createPersistentStateHook } from '@lib/ui/state/createPersistentStateHook'
import { createPersistentStateManager } from '@lib/ui/state/createPersistentStateManager'

export enum PersistentStateKey {
  ThemePreference = 'themePreference',
}

const persistentStorage =
  typeof window !== 'undefined'
    ? new LocalStorage<PersistentStateKey>()
    : new TemporaryStorage<PersistentStateKey>()

export const usePersistentState =
  createPersistentStateHook<PersistentStateKey>(persistentStorage)

export const managePersistentState =
  createPersistentStateManager<PersistentStateKey>(persistentStorage)
```

5. **Implement `ThemeProvider` and `GlobalStyle` in Your App:** In your application, use the `ThemeProvider` from RadzionKit to manage theme changes and store user preferences with the `usePersistentState` hook. Include the `GlobalStyle` component to apply global CSS styles, such as font family and custom scrollbars, ensuring a consistent look and feel across your app.

```tsx
import { GlobalStyle } from '@lib/ui/css/GlobalStyle'
import { Inter } from 'next/font/google'
import { PersistentStateKey, usePersistentState } from '@product/ui-demo/state/persistentState'
import { ThemePreference } from '@lib/ui/theme/ThemePreference'
import { DarkLightThemeProvider } from '@lib/ui/theme/DarkLightThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
})

export const App = () => {
  const [theme, setTheme] = usePersistentState<ThemePreference>(
    PersistentStateKey.ThemePreference,
    'system',
  )

  return (
    <DarkLightThemeProvider value={theme} onChange={setTheme}>
      <GlobalStyle fontFamily={inter.style.fontFamily} />
      // ...
    </DarkLightThemeProvider>
  )
}
```
