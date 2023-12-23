import { isProduction } from 'shared'
import { shouldBeDefined } from '@radzionkit/utils/assert/shouldBeDefined'
import { AmplitudeAnalytics } from '@radzionkit/ui/analytics/AmplitudeAnalytics'
import { LocalAnalytics } from '@radzionkit/ui/analytics/LocalAnalytics'

export const analytics = isProduction
  ? new AmplitudeAnalytics(
      shouldBeDefined(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY),
    )
  : new LocalAnalytics()
