import { useAnalytics } from '@lib/analytics-ui/AnalyticsContext'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const PageVisitTracker = () => {
  const { pathname } = useRouter()
  const { trackEvent } = useAnalytics()

  useEffect(() => {
    trackEvent('Visit page', { pathname })
  }, [trackEvent, pathname])

  return null
}
