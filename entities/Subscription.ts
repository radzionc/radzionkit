export type SubscriptionBillingCycle = 'month' | 'year'

export type SubscriptionStatus = 'active' | 'canceled' | 'pastDue'

export interface Subscription {
  id: string
  planId: string
  status: SubscriptionStatus
  nextBilledAt?: number
  endsAt?: number
}
