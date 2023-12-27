import { Analytics } from './Analytics'
import * as amplitude from '@amplitude/analytics-browser'

export class AmplitudeAnalytics implements Analytics {
  apiKey: string
  isInitialized: boolean = false

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  private initialize() {
    if (!this.isInitialized) {
      amplitude.init(this.apiKey)
      this.isInitialized = true
    }
  }

  setUser(id: string) {
    this.initialize()
    amplitude.setUserId(id)
  }

  trackEvent(name: string, data?: Record<string, unknown>) {
    this.initialize()
    amplitude.track(name, data)
  }
}
