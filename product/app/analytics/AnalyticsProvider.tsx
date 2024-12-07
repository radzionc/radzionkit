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
