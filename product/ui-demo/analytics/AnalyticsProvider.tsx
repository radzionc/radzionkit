import { AmplitudeAnalyticsProvider } from '@lib/analytics-ui/AmplitudeAnalyticsProvider'
import { LocalAnalyticsProvider } from '@lib/analytics-ui/LocalAnalyticsProvider'
import { ChildrenProp } from '@lib/ui/props'
import { shouldBeDefined } from '@lib/utils/assert/shouldBeDefined'

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
