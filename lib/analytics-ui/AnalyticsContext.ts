import { createContextHook } from '@lib/ui/state/createContextHook'
import { createContext } from 'react'

export type AnalyticsContextState = {
  setUser: (id: string) => void
  trackEvent: (name: string, data?: Record<string, any>) => void
}

export const AnalyticsContext = createContext<
  AnalyticsContextState | undefined
>(undefined)

export const useAnalytics = createContextHook(
  AnalyticsContext,
  'AnalyticsContext',
)
