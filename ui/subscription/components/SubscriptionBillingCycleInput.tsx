import { useTheme } from 'styled-components'
import { InputProps } from '../../props'
import { toPercents } from '@reactkit/utils/toPercents'
import { HStack } from '../../layout/Stack'
import { Switch } from '../../ui/Switch/Switch'
import { Tag } from '../../ui/Tag'
import { SubscriptionBillingCycle } from '@reactkit/entities/Subscription'

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
