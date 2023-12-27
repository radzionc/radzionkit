# RadzionKit: Speedy Setup for Robust Full-Stack Monorepo Projects

![RadzionKit](https://kit.radzion.com/images/banner-2x.png)

RadzionKit is the ultimate solution for developers looking to jumpstart their projects without the stress of complex setups. Designed as a comprehensive monorepo, it provides an integrated suite of tools for full-stack development, from a robust UI library to streamlined backend services. With RadzionKit, you save valuable time both in kicking off new projects and during the development process, ensuring a smooth, efficient, and hassle-free coding experience. Embrace the power of simplicity and efficiency with RadzionKit — your partner in transforming coding challenges into coding triumphs.

## Monorepo Overview: Inside RadzionKit's Diverse Package Ecosystem

RadzionKit takes advantage of Yarn Workspaces to streamline a monorepo setup, organizing code into two primary directories: `lib` and `demo`. The `lib` folder houses generic code packages like `@lib/utils` or `@lib/ui`, designed to be project-agnostic and easily portable to any project without carrying over project-specific logic. On the other hand, the `demo` directory houses example implementations, such as `@demo/api` or `@demo/app`, that serve as blueprints demonstrating how to integrate and adapt the `@lib` packages to the unique needs of your project—simply replace `demo` with your project's name to customize. This thoughtful architecture not only streamlines the development process but also enhances the reusability of code, making it effortless to scale and modify your project as it grows.

| Package Name    | Description                                  | Stack |
|-----------------|----------------------------------------------|-------------------------|
| `@lib/utils`           | Comprising a diverse array of utility functions, the `@lib/utils` package streamlines common coding tasks. It features modules for array manipulation, validation, template processing, time calculations, and more, allowing you to write cleaner code and implement complex logic with ease.   | TypeScript     |
| `@lib/ui`              | The `@lib/ui` package is a comprehensive library of React components and hooks, meticulously designed to cover all facets of a modern user interface. This package includes a wide range of components such as buttons, forms, modals, and navigation bars, along with utility hooks and services for authentication, analytics, and state management. It's built to empower developers with the tools they need to create elegant, responsive, and accessible user experiences with ease.       | `react`, `react-query`, `@floating-ui`, `styled-components`     |
| `@lib/subscription-ui` and `@lib/web3-ui`              | The `@lib/subscription-ui` package showcases domain-specific UI elements for managing subscription services, while the `@lib/web3-ui` package provides a set of components tailored for Web3 interfaces, both serving as exemplary models for structuring UI code within a domain-focused package.       | `react` |
| `@lib/next-ui`         | The `@lib/next-ui`  package is designed to enhance Next.js applications, offering custom hooks for query parameter handling and metadata components for streamlined page SEO optimization.     | `next`     |
| `@lib/codegen`         | The `@lib/codegen` package contains a set of TypeScript utilities designed to automate the generation of code files, including TypeScript interfaces and JSON files, facilitating a more efficient development workflow.      | TypeScript     |
| `@lib/dynamodb`        | The `@lib/dynamodb` package is equipped with TypeScript utilities to streamline interactions with DynamoDB, including client setup, item operations, and query parameter generation for efficient database management.      | DynamoDB     |
| `@lib/countries`           | The `@lib/countries` package delivers a curated, typed list of country codes with corresponding names and includes utilities to generate this data from a JSON file, simplifying country-related data management in your projects.   | TypeScript     |
| `infra`           | The `infra` package provides Terraform configurations and scripts for a robust and automated infrastructure setup on AWS, ensuring a secure and scalable environment for your applications.     | Terraform, AWS     |
| `@demo/entities`        | The `@demo/entities`  package serves as a centralized repository for your application's entities, defining the core data structures that drive your business logic.               | TypeScript     |
| `@demo/entities-utils`  | The `demo/entities-utils` package provides a foundational set of utilities tailored for managing and manipulating your application's entities, designed to be expanded as your project grows.    | TypeScript     |
| `@demo/email`           | The `@demo/email` package offers essential utilities to facilitate the sending of emails within your application, including pre-configured templates like login link emails for quick integration and use.                 | AWS SES, `@react-email`     |
| `@demo/db`              | The `@demo/db` package serves as a placeholder within the template, poised to house custom functions for interacting with app-specific tables and entities in DynamoDB, streamlining the path to tailored database operations.          | DynamoDB     |
| `@demo/app`            | The `@demo/app`  project is a static site generation (SSG) showcase, built with Next.js, that demonstrates the capabilities and components of the `ui` package, providing a real-world example of the library's potential in a production-like environment.                     | NextJS     |
| `@demo/api-interface`   | The `api-interface` package provides a structured TypeScript interface for the app's backend API, including error handling and method definitions, to ensure type safety and consistency across frontend and backend communications.             | TypeScript     |
| `@demo/api`             | The `api` package is a lightweight, TypeScript-based backend solution that faithfully implements the `api-interface` with minimal dependencies, primarily utilizing resolvers for handling requests. Optimized for use as an AWS Lambda function, it's an ideal choice for serverless architectures requiring the expressiveness of TypeScript and the efficiency of the AWS ecosystem.     | `express`, AWS Lambda, TypeScript     |

## Getting Started with RadzionKit: Launching Your New Project

Initiate your project using RadzionKit from our GitHub template. The `demo` folder serves as a practical example, showcasing package integration — rename it to reflect your project's name or remove it if you prefer to start fresh. Update any `@demo` references to `@{project_name}`, install dependencies with `yarn`, and your setup is complete.

## Integrating RadzionKit's `lib` Packages into Your Monorepo

Select the `@lib` packages you require from RadzionKit and copy them into your monorepo. Be sure to include all associated dependencies; for example, if you choose `@lib/ui`, check if it necessitates `@lib/utils` and copy it as well. There's no need for renaming—these packages are designed to work out of the box. For practical examples of how these packages can be used within an application, refer to the implementations in the `demo` folder. After incorporating the desired packages, run `yarn` to install the dependencies, and your monorepo will be equipped with the versatile features of RadzionKit.

## Effortlessly Integrate RadzionKit's UI Package: Enhance Your Project's User Interface

1. **For NextJS Projects Only:** Integrate the `_document.tsx` from RadzionKit's `demo/pages/_document.tsx` into your project's custom document file  to ensure styled-components function properly.

2. **For NextJS Projects Only:** Update your `next.config.js` to set `styledComponents` to `true` in the compiler options for proper styling, and include your UI package in `transpilePackages` to ensure Next.js correctly compiles and includes the UI package from the monorepo.

```javascript
const nextConfig = {
  // ...
  compiler: {
    styledComponents: true,
  },
  transpilePackages: ['@lib/ui'],
}
```

3. Create a `styled.d.ts` file at the root of your project and include the following content to integrate RadzionKit's theme with styled-components' default theme:

```typescript
import 'styled-components';
import { Theme } from '@lib/ui/theme/Theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
```

4. **Add `persistentState` File for Local Storage Interaction:** Place a `persistentState` file in the `state` folder of your app package to enhance local storage interaction. For detailed guidance, refer to this YouTube video: [Understanding Persistent State in React](https://youtu.be/_90rzlGy0SM).

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
import { PersistentStateKey, usePersistentState } from 'state/persistentState'
import { ThemePreference } from '@lib/ui/theme/ThemePreference'
import { ThemeProvider } from '@lib/ui/theme/ThemeProvider'

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
    <ThemeProvider value={theme} onChange={setTheme}>
      <GlobalStyle fontFamily={inter.style.fontFamily} />
      // ...
    </ThemeProvider>
  )
}
```

## RadzionKit Cookbook: Simplifying Development with Practical YouTube Tutorials

To maximize your experience with RadzionKit, we've compiled the RadzionKit Cookbook, a series of YouTube tutorials designed to showcase the toolkit's practical applications in solving everyday development challenges. These tutorials cater to all skill levels, from beginners to experienced developers, and cover a range of topics from initial setup to advanced integrations. The RadzionKit Cookbook videos are an invaluable resource, offering step-by-step instructions, practical tips, and expert insights, all aimed at helping you harness the full power of RadzionKit for efficient, elegant solutions in your development projects.

* [Simplifying TypeScript Backend Development: A Comprehensive Guide](https://youtu.be/BDGR2ji5DWg)
* [Building Internationalization in a Static NextJS Application Without External Libraries](https://youtu.be/V2FgF1AekUQ)
* [NextJS Meta Tags Guide: SEO & PWA Icons](https://youtu.be/uqI6BwnIs8I)
* [Creating a Reusable Combobox with React and TypeScript](https://youtu.be/0Ok3SD4hT-Y)
* [Auto-Generating TypeScript for Dynamic React Components: A Deep Dive](https://youtu.be/_z_kAB5LRgM)
* [Building a Subscription Payments System with Next.js & Node.js](https://youtu.be/ghTNoWkkf-0)
* [Creating a Responsive and Minimalistic Modal Component in React](https://youtu.be/Sp-KmZfUWn8)
* [Magic Link Email Authentication for NextJS + NodeJS Applications](https://youtu.be/b_BZKpeLxO0)
* [Maintaining React State in a URL Query String with NextJS](https://youtu.be/fLx-JvNa450)
* [Full-Stack Implementation of OAuth 2 Authentication (Google & Facebook) with NextJS and NodeJS](https://youtu.be/ysj0XNAolEc)
* [Creating Different Layouts for Different Pages in NextJS](https://youtu.be/hrSBxLlZsCc)
* [Efficient React State Management with usePersistentState and Local Storage](https://youtu.be/_90rzlGy0SM)
* [Useful CSS Utils for React Projects - A Practical Guide](https://youtu.be/wBpoknNn6II)
* [Essential Utilities & Helper Functions for TypeScript Projects](https://youtu.be/bWLeNhFaGRg)
* [Adding Amplitude Analytics to a NextJS App Tutorial](https://youtu.be/hAhq0uH5Kcc)
* [How to Set Up a Monorepo with Yarn Workspaces, NextJS, Styled Components, Prettier](https://youtu.be/T6pWiEHVhBE)
* [Deploying a NextJS Static App to AWS S3 and CloudFront](https://youtu.be/ekvQBFsCOnU)
* [Designing a Color Palette for Dark and Light Modes with React, Styled Components and HSLA](https://youtu.be/N5nsvOmSUrU)
* [HSLA Color Format for React: TypeScript, Styled Components, Variants, Colors Generator, Color Picker](https://youtu.be/f3_TYR-8Sd8)
* [Advanced React Button Component Tutorial](https://youtu.be/D2AmZCuk18Q)
* [How To Make Tooltip React Component with Arrow using Floating UI](https://youtu.be/gt-29kdEwtA)
* [Copy Text to Clipboard on Click React Component](https://youtu.be/sUKTden0DSI)
* [How To Make Popover Menu React Component With Floating UI](https://youtu.be/dW9nVeeVc20)
* [How To Make Emoji Input Menu React Component with Emoji Mart](https://youtu.be/sSGxGmUx00g)
* [How To Make Hover Effect Overflow Its Container with React](https://youtu.be/35XAA5Hgag0)
* [How To Make Slider Component with React & Style Range Input](https://youtu.be/HqfFtOh8_50)
* [Building Versatile React Components: Cards and Panels](https://youtu.be/cY-wADVIrRQ)
* [Efficient CSS Layouts with Stack Components](https://youtu.be/iVYo-gqyi90)
* [Dynamic Form with react-hook-form useFieldArray](https://youtu.be/QYVlkk6WMmc)
* [Infinite Scroll Component with React Query](https://youtu.be/mZfDvfs2GtI)
* [A Deep Dive into React: useElementSize Hook and Resize Observing](https://youtu.be/PQ7QKBz_zWE)