import { ChildrenProp } from '@lib/ui/props'
import { AnalyticsContext, AnalyticsContextState } from './AnalyticsContext'

const localAnalytics: AnalyticsContextState = {
  setUser: (id) => {
    console.log('Set user for analytics: ', id)
  },
  trackEvent: (name, data) => {
    console.log('Track event: ', name, data)
  },
}

export const LocalAnalyticsProvider = ({ children }: ChildrenProp) => {
  return (
    <AnalyticsContext.Provider value={localAnalytics}>
      {children}
    </AnalyticsContext.Provider>
  )
}
