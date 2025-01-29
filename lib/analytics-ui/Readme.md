# @lib/analytics-ui

This package provides components to integrate Amplitude analytics into your React application.

## Getting Started

### 1. Get Amplitude API Key

First, obtain your Amplitude API key from the Amplitude dashboard.

### 2. Set Environment Variable

Provide an environment variable with the Amplitude API key to your app, e.g., `NEXT_PUBLIC_AMPLITUDE_API_KEY`.

### 3. Create `AnalyticsProvider` Component

Create an `AnalyticsProvider` component to manage the analytics providers.

```tsx
import { shouldBeDefined } from '@lib/utils/assert/shouldBeDefined'
import { ChildrenProp } from '@lib/ui/props'
import { AmplitudeAnalyticsProvider } from '@lib/analytics-ui/AmplitudeAnalyticsProvider'
import { LocalAnalyticsProvider } from '@lib/analytics-ui/LocalAnalyticsProvider'

export const AnalyticsProvider = ({ children }: ChildrenProp) => {
  if (process.env.NODE_ENV === 'production') {
    return (
      <AmplitudeAnalyticsProvider
        apiKey={shouldBeDefined(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY)}
      >
        {children}
      </AmplitudeAnalyticsProvider>
    )
  }

  return <LocalAnalyticsProvider>{children}</LocalAnalyticsProvider>
}
```

### 4. Wrap Your App with `AnalyticsProvider`

Wrap your application with the `AnalyticsProvider` component. To track page visits, use the `PageVisitTracker` component.

```tsx
import { AnalyticsProvider } from '@lib/analytics-ui/AnalyticsProvider'
import { PageVisitTracker } from '@lib/next-ui/PageVisitTracker'

function MyApp() {
  return (
    <AnalyticsProvider>
      <PageVisitTracker />
      {/* Other components */}
    </AnalyticsProvider>
  )
}
```

