import { useEffect } from 'react'
import * as amplitude from '@amplitude/analytics-browser'
import { AnalyticsContext, AnalyticsContextState } from './AnalyticsContext'
import { ComponentWithChildrenProps } from '@lib/ui/props'

type AmplitudeAnalyticsProviderProps = ComponentWithChildrenProps & {
  apiKey: string
}

const amplitudeAnalytics: AnalyticsContextState = {
  setUser: (id) => {
    amplitude.setUserId(id)
  },
  trackEvent: (name, data) => {
    amplitude.track(name, data)
  },
}

export const AmplitudeAnalyticsProvider = ({
  apiKey,
  children,
}: AmplitudeAnalyticsProviderProps) => {
  useEffect(() => {
    amplitude.init(apiKey)
  }, [apiKey])

  return (
    <AnalyticsContext.Provider value={amplitudeAnalytics}>
      {children}
    </AnalyticsContext.Provider>
  )
}
