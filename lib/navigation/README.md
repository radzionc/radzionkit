# Navigation

A lightweight, type-safe routing system for React applications that don't require URL-based navigation.

## Overview

This library provides a simple routing solution ideal for:
- Desktop applications (Electron, Tauri)
- Browser extensions
- Widgets and embeddable applications
- Any React app that doesn't need URL-based routing

## Features

- **Type-safe routing** - Complete type safety for navigation and view state
- **View state management** - Pass and preserve state between views
- **Navigation history** - Support for back/forward navigation
- **No external dependencies** - Built on React context without browser APIs
- **Lightweight** - Minimal implementation with no bloat

## Installation

```bash
# Using yarn (with workspace protocol)
yarn workspace @your-app add @lib/navigation
```

## Basic Usage

### 1. Define your views

```tsx
// AppView.ts
export type AppView =
  | {
      id: "home"
      state: HomeState
    }
  | {
      id: "settings"
    }
  | {
      id: "details"
      state: DetailsState
    }

export type AppViewId = AppView["id"]
```

### 2. Map views to components

```tsx
// views.ts
import { Views } from "@lib/navigation/Views"
import { HomeView } from "../HomeView"
import { SettingsView } from "../SettingsView"
import { DetailsView } from "../DetailsView"
import { AppViewId } from "./AppView"

export const views: Views<AppViewId> = {
  home: HomeView,
  settings: SettingsView,
  details: DetailsView
}
```

### 3. Set up the navigation provider

```tsx
// App.tsx
import { ActiveView } from "@lib/navigation/ActiveView"
import { NavigationProvider } from "@lib/navigation/state"
import { Layout } from "./Layout"
import { views } from "./navigation/views"

const initialView = { id: "home", state: { /* initial state */ } }

export const App = () => (
  <NavigationProvider
    initialValue={{ history: [initialView], currentIndex: 0 }}
  >
    <Layout>
      <ActiveView views={views} />
    </Layout>
  </NavigationProvider>
)
```

### 4. Create custom hooks for type-safe navigation

```tsx
// hooks/useAppNavigate.ts
import { useNavigate } from "@lib/navigation/hooks/useNavigate"
import { AppView } from "../AppView"

export function useAppNavigate() {
  return useNavigate<AppView>()
}
```

```tsx
// hooks/useAppViewState.ts
import { useViewState } from "@lib/navigation/hooks/useViewState"
import { AppView } from "../AppView"

type AppViewWithState = Extract<AppView, { state: any }>
type AppViewWithStateId = AppViewWithState["id"]
type AppViewStateMap = {
  [K in AppViewWithStateId]: Extract<AppView, { id: K }>["state"]
}

export function useAppViewState<P extends AppViewWithStateId>() {
  return useViewState<AppViewStateMap[P]>()
}
```

### 5. Use the navigation hooks in your components

```tsx
import { useAppNavigate } from "./navigation/hooks/useAppNavigate"
import { useAppViewState } from "./navigation/hooks/useAppViewState"

export const HomeView = () => {
  const [state, setState] = useAppViewState<"home">()
  const navigate = useAppNavigate()

  return (
    <div>
      <h1>Home View</h1>
      <button
        onClick={() => 
          navigate({ 
            id: "details", 
            state: { itemId: 123 } 
          })
        }
      >
        View Details
      </button>
    </div>
  )
}
```

## API Reference

### Components

- `NavigationProvider` - Context provider for navigation state
- `ActiveView` - Component that renders the current active view

### Hooks

- `useNavigation` - Access the raw navigation state
- `useNavigate` - Navigate to a different view
- `useNavigateBack` - Go back to the previous view
- `useViewState` - Access and update the current view's state

### Types

- `View` - Base type for all views
- `Views` - Type for mapping view IDs to components

## Example

For a complete working example, see the navigation demo in the `@ui-demo/navigation-demo` package. 