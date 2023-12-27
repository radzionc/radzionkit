import { isProduction } from 'shared'
import { shouldBeDefined } from '@lib/utils/assert/shouldBeDefined'
import { AmplitudeAnalytics } from '@lib/ui/analytics/AmplitudeAnalytics'
import { LocalAnalytics } from '@lib/ui/analytics/LocalAnalytics'

export const analytics = isProduction
  ? new AmplitudeAnalytics(
      shouldBeDefined(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY),
    )
  : new LocalAnalytics()
