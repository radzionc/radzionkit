import { useTheme } from 'styled-components'
import { InputProps } from '@lib/ui/props'
import { toPercents } from '@lib/utils/toPercents'
import { HStack } from '@lib/ui/layout/Stack'
import { Switch } from '@lib/ui/inputs/Switch/Switch'
import { Tag } from '@lib/ui/tags/Tag'
import { SubscriptionBillingCycle } from '@lib/subscription/Subscription'

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
        kind="primary"
        value={value === 'year'}
        onChange={(value) => onChange(value ? 'year' : 'month')}
        label="Annual billing"
      />
      <Tag $color={colors.success}>save {toPercents(saving, 'round')}</Tag>
    </HStack>
  )
}
