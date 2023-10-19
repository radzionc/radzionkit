import { SubscriptionBillingCycle } from '../../../entities/Subscription'
import { getValueProviderSetup } from '../../state/getValueProviderSetup'

export const {
  useValue: useSubscriptionBillingCycle,
  provider: SubscriptionBillingCycleProvider,
} = getValueProviderSetup<SubscriptionBillingCycle>('BillingCycle')
