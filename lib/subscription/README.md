# @lib/subscription

This package provides types for managing subscription data, including billing cycles and subscription statuses. It defines the `Subscription` interface, which includes properties such as `id`, `planId`, `status`, `nextBilledAt`, and `endsAt`.

## Types

### SubscriptionBillingCycle
```typescript
export type SubscriptionBillingCycle = 'month' | 'year'
```
Defines the billing cycle for a subscription, which can be either monthly or yearly.

### SubscriptionStatus
```typescript
export type SubscriptionStatus = 'active' | 'canceled' | 'pastDue'
```
Represents the status of a subscription, which can be active, canceled, or past due.

## Interface

### Subscription
```typescript
export interface Subscription {
  id: string
  planId: string
  status: SubscriptionStatus
  nextBilledAt?: number
  endsAt?: number
}
```
Represents a subscription with properties for the subscription ID, plan ID, status, next billing date, and end date.