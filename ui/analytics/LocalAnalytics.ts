import { Analytics } from './Analytics'

export class LocalAnalytics implements Analytics {
  constructor() {
    console.log('Initialize local analytics')
  }

  setUser(id: string) {
    console.log('Set user for analytics: ', id)
  }

  trackEvent(name: string, data?: Record<string, any>) {
    console.log('Track event: ', name, data)
  }
}
