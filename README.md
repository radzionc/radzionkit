# RadzionKit: Fast-Track Your Project Setup & Development - Effortless, Stress-Free Coding Awaits

![RadzionKit](https://kit.radzion.com/images/banner-2x.png)

RadzionKit is the ultimate solution for developers looking to jumpstart their projects without the stress of complex setups. Designed as a comprehensive monorepo, it provides an integrated suite of tools for full-stack development, from a robust UI library to streamlined backend services. With RadzionKit, you save valuable time both in kicking off new projects and during the development process, ensuring a smooth, efficient, and hassle-free coding experience. Embrace the power of simplicity and efficiency with RadzionKit — your partner in transforming coding challenges into coding triumphs.

## Monorepo Overview: Inside RadzionKit's Diverse Package Ecosystem

RadzionKit leverages Yarn Workspaces to create a seamless monorepo experience, offering a flexible and robust starting point for your projects. Customize your development workflow with ease by effortlessly adding or removing packages as needed.

| Package Name    | Description                                  | Primary Stack/Libraries |
|-----------------|----------------------------------------------|-------------------------|
| utils           | Comprising a diverse array of utility functions, the `utils` package streamlines common coding tasks. It features modules for array manipulation, validation, template processing, time calculations, and more, allowing developers to write cleaner code and implement complex logic with ease.   | TypeScript     |
| ui              | The `ui` package is a comprehensive library of React components and hooks, meticulously designed to cover all facets of a modern user interface. This package includes a wide range of components such as buttons, forms, modals, and navigation bars, along with utility hooks and services for authentication, analytics, and state management. It's built to empower developers with the tools they need to create elegant, responsive, and accessible user experiences with ease.       | react, react-query, @floating-ui, styled-components     |
| next-ui         | The `next-ui` package is designed to enhance Next.js applications, offering custom hooks for query parameter handling and metadata components for streamlined page SEO optimization.     | NextJS     |
| infra           | The `infra` package provides Terraform configurations and scripts for a robust and automated infrastructure setup on AWS, ensuring a secure and scalable environment for your applications.     | Terraform, AWS     |
| entities        | The `entities` package serves as a centralized repository for your application's entities, defining the core data structures that drive your business logic.               | TypeScript     |
| entities-utils  | The `entities-utils` package provides a foundational set of utilities tailored for managing and manipulating your application's entities, designed to be expanded as your project grows.    | TypeScript     |
| email           | The `email` package offers essential utilities to facilitate the sending of emails within your application, including pre-configured templates like login link emails for quick integration and use.                 | AWS SES, @react-email     |
| dynamodb        | The `dynamodb` package is equipped with TypeScript utilities to streamline interactions with DynamoDB, including client setup, item operations, and query parameter generation for efficient database management.      | DynamoDB     |
| db              | The `db` package serves as a placeholder within the template, poised to house custom functions for interacting with app-specific tables and entities in DynamoDB, streamlining the path to tailored database operations.          | DynamoDB     |
| demo            | The `demo` project is a static site generation (SSG) showcase, built with Next.js, that demonstrates the capabilities and components of the `ui` package, providing a real-world example of the library's potential in a production-like environment.                     | NextJS     |
| codegen         | The `codegen` package contains a set of TypeScript utilities designed to automate the generation of code files, including TypeScript interfaces and JSON files, facilitating a more efficient development workflow.      | TypeScript     |
| api-interface   | The `api-interface` package provides a structured TypeScript interface for the app's backend API, including error handling and method definitions, to ensure type safety and consistency across frontend and backend communications.             | TypeScript     |
| api             | The `api` package is a lightweight, TypeScript-based backend solution that faithfully implements the `api-interface` with minimal dependencies, primarily utilizing resolvers for handling requests. Optimized for use as an AWS Lambda function, it's an ideal choice for serverless architectures requiring the expressiveness of TypeScript and the efficiency of the AWS ecosystem.     | Express, AWS Lambda, TypeScript, API     |

## Getting Started with RadzionKit: Launching Your New Project

Kickstart your new project with RadzionKit by clicking the `Use this template` button on our GitHub repository, or clone it directly. Rename all instances of `radzionkit` to your project's name, prune any unnecessary packages, run `yarn` to install dependencies, and you're set! For a practical example of RadzionKit in action, explore the `demo` package to see how it fits within a NextJS app.

## Importing RadzionKit Packages into an Existing Monorepo

Copy your selected RadzionKit packages into your existing monorepo, ensuring to include any dependent RadzionKit packages, and rename all imports of `@radzionkit` to your project's name. Run `yarn` to install dependencies, and you're ready to go!


## RadzionKit Cookbook: Simplifying Development with Practical YouTube Tutorials

To maximize your experience with RadzionKit, we've compiled the RadzionKit Cookbook, a series of YouTube tutorials designed to showcase the toolkit's practical applications in solving everyday development challenges. These tutorials cater to all skill levels, from beginners to experienced developers, and cover a range of topics from initial setup to advanced integrations. The RadzionKit Cookbook videos are an invaluable resource, offering step-by-step instructions, practical tips, and expert insights, all aimed at helping you harness the full power of RadzionKit for efficient, elegant solutions in your development projects.

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