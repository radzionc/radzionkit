import { isProduction } from 'shared'
import { shouldBeDefined } from '@reactkit/utils/shouldBeDefined'
import { AmplitudeAnalytics } from '@reactkit/ui/analytics/AmplitudeAnalytics'
import { LocalAnalytics } from '@reactkit/ui/analytics/LocalAnalytics'

export const analytics = isProduction
  ? new AmplitudeAnalytics(
      shouldBeDefined(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY),
    )
  : new LocalAnalytics()
