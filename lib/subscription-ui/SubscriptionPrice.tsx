import { SubscriptionBillingCycle } from '@lib/subscription/Subscription'
import { VStack, HStack } from '@lib/ui/css/stack'
import {
  HStackSeparatedBy,
  slashSeparator,
} from '@lib/ui/layout/StackSeparatedBy'
import { Text } from '@lib/ui/text'
import { MONTHS_IN_YEAR } from '@lib/utils/time'

interface SubscriptionPriceProps {
  billingCycle: SubscriptionBillingCycle
  currency: string
  price: Record<SubscriptionBillingCycle, number>
}

const monthsInPeriod: Record<SubscriptionBillingCycle, number> = {
  month: 1,
  year: MONTHS_IN_YEAR,
}

export const SubscriptionPrice = ({
  billingCycle,
  currency,
  price,
}: SubscriptionPriceProps) => {
  return (
    <VStack alignItems="center" gap={4}>
      <HStack gap={4} alignItems="center">
        <Text size={18} as="span" color="contrast">
          {currency}
        </Text>
        <HStackSeparatedBy
          gap={4}
          separator={<Text color="shy">{slashSeparator}</Text>}
          wrap="wrap"
        >
          <Text color="contrast" size={32} weight="600" as="span">
            {(price[billingCycle] / monthsInPeriod[billingCycle]).toFixed(2)}
          </Text>
          <Text size={18} as="span" color="supporting">
            mo
          </Text>
        </HStackSeparatedBy>
      </HStack>
      <Text
        size={14}
        color="supporting"
        style={{
          transition: 'none',
          visibility: billingCycle === 'month' ? 'hidden' : 'initial',
        }}
      >
        {currency}
        {price[billingCycle]} per year
      </Text>
    </VStack>
  )
}
