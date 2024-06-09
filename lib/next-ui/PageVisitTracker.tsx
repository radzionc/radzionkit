import { useAnalytics } from '@lib/analytics-ui/AnalyticsContext'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const PageVisitTracker = () => {
  const { pathname } = useRouter()
  const analytics = useAnalytics()

  useEffect(() => {
    analytics.trackEvent('Visit page', { pathname })
  }, [pathname])

  return null
}
