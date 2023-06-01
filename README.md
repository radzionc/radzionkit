# How to use ReactKit in your project

### 1. Copy lib folder to your project

### 2. Install dependencies

```sh
yarn add @floating-ui/dom @floating-ui/react react-spring @react-spring/web date-fns focus-trap-react react react-dom react-dropzone react-to-print react-use styled-components react-query
yarn add --dev @types/react @types/react-dom @types/styled-components eslint typescript
```

### 3. Copy state folder to your project

### 4. Copy ui folder to your project

### 5. Finish setup

```tsx
import { GlobalStyle } from 'lib/ui/GlobalStyle'
import { ThemeProvider } from 'ui/ThemeProvider'

export const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <p>Your app goes here</p>
    </ThemeProvider>
  )
}
```

# How I setup a regular SPA

### 1. Create a new React app with TypeScript template

```sh
yarn create react-app {app_name} --template typescript
```

### 2. Setup tsconfig to use absolute imports

Add `baseUrl` to `tsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  }
}
```

### 3. Add Prettier

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
      "prettier --write --single-quote --no-semi"
    ]
  }
```

### 4. Add Sentry

1. Install dependencies

```sh
yarn add @sentry/react @sentry/integrations
```

2. Provide env variable for Sentry key during deployment

```sh
export REACT_APP_SENTRY_KEY=your_key
```

3. Provide version for Sentry during deployment

An option could be to modify these scripts in package.json

```json
  "scripts": {
    "start": "REACT_APP_VERSION=$npm_package_version react-scripts start",
    "build": "REACT_APP_VERSION=$npm_package_version react-scripts build"
  },
```

5. Create the `shared` directory

6. Add a file `shared/assertEnvVar.ts` with the following content

````ts
type VariableName =
  | 'SENTRY_KEY'
  | 'VERSION'

export const assertEnvVar = (name: VariableName): string => {
  const envVarName = `REACT_APP_${name}`
  const value = process.env[envVarName]
  if (!value) {
    throw new Error(`Missing ${envVarName} environment variable`)
  }

  return value
}
```

7. Add a file `shared/index.ts` with the following content

```ts
export const isProduction = process.env.NODE_ENV === 'production'
```

8. Create the `errors` directory

9. Add a file `errors/errorMonitoring.ts` with the following content

```ts
import { ExtraErrorData as ExtraErrorDataIntegration } from "@sentry/integrations"
import * as Sentry from "@sentry/react"
import { isProduction } from "shared"
import { assertEnvVar } from "shared/assertEnvVar"

export const setupErrorMonitoring = () => {
  if (!isProduction) return

  Sentry.init({
    ignoreErrors: [
      "ResizeObserver loop limit exceeded",
      "ResizeObserver loop completed with undelivered notifications.",
      "$ is not defined",
      "window.fetch is not a function",
    ],
    dsn: assertEnvVar("SENTRY_KEY"),
    integrations: [new ExtraErrorDataIntegration({ depth: 10 })],
    tracesSampleRate: 1.0,
  })

  Sentry.configureScope((scope) =>
    scope.setTag("version", assertEnvVar("VERSION"))
  )
}

export const setUserIdForErrorMonitoring = (userId: string) => {
  if (!isProduction) return

  Sentry.configureScope((scope) => {
    scope.setUser({ id: userId })
  })
}

export const reportError = (error: any, extra: Record<string, string> = {}) => {
  console.log("reportError", error, extra)
  Sentry.withScope((scope) => {
    Object.entries(extra).forEach(([key, value]) => {
      scope.setExtra(key, value)
    })
    Sentry.captureException(error)
  })
}
````

10. Call `setupErrorMonitoring()` before `App` declaration.
