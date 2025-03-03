import { SubscriptionBillingCycle } from '@lib/subscription/Subscription'
import { HStack } from '@lib/ui/css/stack'
import { Switch } from '@lib/ui/inputs/Switch'
import { InputProps } from '@lib/ui/props'
import { Tag } from '@lib/ui/tags/Tag'
import { toPercents } from '@lib/utils/toPercents'
import { useTheme } from 'styled-components'

interface SubscriptionBillingCycleInputProps
  extends InputProps<SubscriptionBillingCycle> {
  saving: number
}

export const SubscriptionBillingCycleInput = ({
  value,
  onChange,
  saving,
}: SubscriptionBillingCycleInputProps) => {
  const { colors } = useTheme()
  return (
    <HStack alignItems="center" gap={8}>
      <Switch
        value={value === 'year'}
        onChange={(value) => onChange(value ? 'year' : 'month')}
        label="Annual billing"
      />
      <Tag $color={colors.success}>save {toPercents(saving, 'round')}</Tag>
    </HStack>
  )
}
