# ReactKit

ReactKit is an ultimate component system with the following benefits:

- lots of abstract building blocks for faster development
- a vast range of beautiful components
- minimalistic color system
- dark and light themes
- you have complete control over the code

You can see all the components in action at [reactkit.radzion.com](https://reactkit.radzion.com). There is also a [YouTube channel](https://www.youtube.com/@radzion), covering almost every piece of ReactKit, explaining implementation and reasoning behind it.

# How to start a new project with ReactKit

1. Use ReactKit as a template by clicking "Use this template" button on GitHub. This will create a new monorepo with Yarn workspaces.

2. Choose a starter for your project:
  - Use the `app` folder as a starting point for your project. It's a NextJS app that powers [reactkit.radzion.com](https://reactkit.radzion.com) and showcasing all the components. To keep the showcase you can duplicate the `app`, and rename it to your project name.
  - Create a new NextJS app by following [these instructions](#how-to-add-a-nextjs-app-in-reactkit-monorepo).

3. Find all mentions of `reactkit` and replace them with your project name.


# How to add a NextJS app to ReactKit monorepo

1. Create a project

```sh
npx create-next-app@latest app
```

2. Update next.config.js

```sh
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  output: 'export',
  transpilePackages: ['@reactkit/ui'],
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
```

3. Install dependencies

```sh
yarn add styled-components next-sitemap
```

4. Add `baseUrl` for absolute import to `tsconfig.json``

```json
{
  "compilerOptions": {
    "baseUrl": ".",
  },
}

```

5. Copy [state](https://github.com/radzionc/reactkit/tree/main/app/state) folder from ReactKit's `app` to your project.

6. Copy [ui](https://github.com/radzionc/reactkit/tree/main/app/ui) folder from ReactKit's `app` to your project.

7. Copy [_document.tsx](https://github.com/radzionc/reactkit/tree/main/app/_document.tsx) file from ReactKit's `app` to your project.

8. Update your App at `pages/_app.tsx` with `ThemeProvider` and `GlobalStyle`

```tsx
import type { AppProps } from 'next/app'
import { GlobalStyle } from '@increaser/ui/ui/GlobalStyle'
import { ThemeProvider } from 'ui/ThemeProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
```

9. Update `.eslintrc.json`

```json
{
  "extends": ["plugin:@next/next/recommended"]
}
```


10. Update `next-sitemap.config.js` with your `siteUrl`:

```js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: '{YOUR_SITE_URL}}',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './out',
}
```

# How to create a monorepo with Yarn workspaces

1. Update Yarn

```sh
yarn set version stable
```

2. Create a new project and add `package.json` file - [source](./package.json)

3. Add `tsconfig.json` file - [source](./tsconfig.json)

4. Add `.prettierrc` file - [source](./.prettierrc)

5. (optional) Add `.prettierignore` file - [source](./.prettierignore)

6. Add `.gitignore` file - [source](./.gitignore)

7. Add `.eslintrc` file - [source](./.eslintrc)

8. Initialize Git:

```sh
git init
```

9. Setup Husky:

```
npx husky-init
```

10. Update `.husky/pre-commit` file - [source](./.husky/pre-commit)

11. Setup Yarn

```
yarn
yarn dlx @yarnpkg/sdks vscode
```

n. We have to explicitly activate the custom TS settings to support Yarn P'n'P in VSCode:

1. Press ctrl+shift+p in a TypeScript file
2. Choose "Select TypeScript Version"
3. Pick "Use Workspace Version"