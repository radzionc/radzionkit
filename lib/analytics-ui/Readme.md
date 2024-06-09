## Add analytics to your app

1. Get Amplitude API key.

3. Provide an environment variable with the Amplitude API key to your app, e.g. `NEXT_PUBLIC_AMPLITUDE_API_KEY`.

2. Create `AnalyticsProvider` component.

```tsx
import { shouldBeDefined } from '@lib/utils/assert/shouldBeDefined'
import { ComponentWithChildrenProps } from '@lib/ui/props'
import { AmplitudeAnalyticsProvider } from '@lib/analytics-ui/AmplitudeAnalyticsProvider'
import { LocalAnalyticsProvider } from '@lib/analytics-ui/LocalAnalyticsProvider'

export const AnalyticsProvider = ({ children }: ComponentWithChildrenProps) => {
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

3. Wrap your app with `AnalyticsProvider`. To track page visits use `PageVisitTracker` component.

```tsx
import { AnalyticsProvider } from '../analytics/AnalyticsProvider'
import { PageVisitTracker } from '@lib/next-ui/PageVisitTracker'

function MyApp() {
  return (
    <AnalyticsProvider>
      <PageVisitTracker />
      // ...
    </AnalyticsProvider>
  )
}
```