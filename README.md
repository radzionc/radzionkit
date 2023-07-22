# ReactKit

ReactKit is an ultimate component system with the following benefits:

- lots of abstract building blocks for faster development
- a vast range of beautiful components
- minimalistic color system
- dark and light themes
- you have complete control over the code

You can see all the components in action at [reactkit.radzion.com](https://reactkit.radzion.com). There is also a [YouTube channel](https://www.youtube.com/@radzion), covering almost every piece of ReactKit, explaining implementation and reasoning behind it.

## How to use ReactKit for new project

#### 1. Use ReactKit as a template by clicking "Use this template" button on GitHub

#### 2. Delete the app folder or rename it to `uidemo` to keep component showcase

#### 2. Find all mentions of `reactkit` and replace them with your project name

#### 3. Create a new NextJS project

```sh
npx create-next-app@latest app
```

## How to add ReactKit to existing project

ReactKit is not a library, but a collection of amazing tools like components, hooks, and utilities. You can use them in your project by copying the code to your project. This way you have complete control over the code and can easily customize it to your needs.

### 1. Copy lib folder to your project

### 2. Install dependencies

```sh
yarn add @floating-ui/dom @floating-ui/react react-spring @react-spring/web date-fns focus-trap-react react react-dom react-dropzone react-to-print react-use styled-components react-query copy-to-clipboard
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
