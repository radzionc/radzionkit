# ReactKit - A Full-Stack Monorepo Template

Welcome to ReactKit, your go-to solution for rapid development with React. ReactKit offers a comprehensive set of abstract building blocks, a rich library of beautiful components, a minimalistic color system, and flexible dark and light themes to empower your projects. With ReactKit, you have complete control over your code, making it a versatile choice for your next venture. Plus, it's set up as a monorepo, allowing you to effortlessly add new apps and packages as your project evolves.

Check out our live showcase at [reactkit.radzion.com](https://reactkit.radzion.com) and explore our [YouTube channel](https://www.youtube.com/@radzion)for in-depth tutorials and insights into ReactKit's implementation.

## Getting Started with ReactKit

1. **Use ReactKit as a Template**: Begin by clicking the "Use this template" button on GitHub. This action will create a new monorepo with Yarn workspaces, giving you a solid foundation for your project.

2. **Choose a Starter**:

- **Use the app Folder**: If you want to start with a fully functional Next.js app, check out the `app` folder. It powers [reactkit.radzion.com](https://reactkit.radzion.com) and showcases all the available components. To maintain the showcase, you can duplicate the `app` folder and rename it to `demo`.

- **Create a New Next.js App**: Alternatively, you can create a fresh Next.js app by following the instructions in the [following section](<(#how-to-add-a-nextjs-app-in-reactkit-monorepo).>).

- Create a new NextJS app by following [these instructions](#adding-a-next.js-app-to-reactkit-monorepo).

3. **Customize Your Project**: Search for all instances of `reactkit` & `ReactKit` in your codebase and replace them with your project's name. This step ensures that your project is uniquely yours.

4. **Run your app**: Run `yarn` in the root of the monorepo to install all dependencies. Then, go to the app folder and run `yarn dev` to start your app.

## Integrating ReactKit UI & Utils Packages

### Adding ReactKit UI & Utils to Your Monorepo

1. Copy the `ui` folder from ReactKit's monorepo to your project.
2. Copy the `utils` folder from ReactKit's monorepo to your project.
3. Replace all instances of `reactkit` in your codebase with your project's name.

### Using ReactKit in a Non-Monorepo Project

1. Copy the code from the `ui` folder in ReactKit's monorepo to your project.
2. Copy the code from the `utils` folder in ReactKit's monorepo to your project.
3. Replace all instances of `@reactkit/utils` with the path to your `utils` folder within your project.

## Adding a Next.js App to ReactKit Monorepo

1. Create a project

```sh
npx create-next-app@latest app
```

2. Update name in package.json, e.g. `@reactkit/app`

3. Update next.config.js

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

4. Install dependencies

```sh
yarn add styled-components@^5.3.5 next-sitemap
yarn add --dev @types/styled-components@^5.1.25
```

5. Add `baseUrl` for absolute import to `tsconfig.json``

```json
{
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

6. Copy [state](https://github.com/radzionc/reactkit/tree/main/app/state) folder from ReactKit's `app` to your project.

7. Copy [ui](https://github.com/radzionc/reactkit/tree/main/app/ui) folder from ReactKit's `app` to your project.

8. Copy [\_document.tsx](https://github.com/radzionc/reactkit/tree/main/app/_document.tsx) file from ReactKit's `app` to your project.

9. Update your App at `pages/_app.tsx` with `ThemeProvider` and `GlobalStyle`

```tsx
import type { AppProps } from 'next/app'
import { GlobalStyle } from '@reactkit/ui/ui/GlobalStyle'
import { ThemeProvider } from 'ui/ThemeProvider'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle fontFamily={inter.style.fontFamily} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
```

10. Update `.eslintrc.json`

```json
{
  "extends": ["plugin:@next/next/recommended"]
}
```

11. Update `next-sitemap.config.js` with your `siteUrl`:

```js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: '{YOUR_SITE_URL}}',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './out',
}
```

## How to create a monorepo with Yarn workspaces

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

11. Disable Yarn P'n'p by copying `.yarnrc.yml` file - [source](./.yarnrc.yml)
