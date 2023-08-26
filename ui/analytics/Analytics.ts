export interface Analytics {
  setUser: (id: string) => void
  trackEvent: (name: string, data?: Record<string, any>) => void
}
