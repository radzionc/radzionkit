### 1. Copy lib folder to your React project

### 2. Install dependencies

```sh
yarn add @floating-ui/dom @floating-ui/react react-spring @react-spring/web date-fns focus-trap-react react react-dom react-dropzone react-to-print react-use styled-components react-query
yarn add --dev @types/react @types/react-dom @types/styled-components eslint typescript
```

### 3. Copy state folder to your React project

### 4. Copy ui folder to your React project

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

### How I setup a regular SPA

1. Create a new React app with TypeScript template

```sh
yarn create react-app {app_name} --template typescript
```

2. Setup tsconfig to use absolute imports

Add `baseUrl` to `tsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  }
}
```

3. Add Prettier

```sh
yarn add --dev husky lint-staged prettier
```

Add to package.json

```json
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
      "prettier --write"
    ]
  }
```
