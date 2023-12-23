import { useTheme } from 'styled-components'
import { InputProps } from '../../props'
import { toPercents } from '@radzionkit/utils/toPercents'
import { HStack } from '../../layout/Stack'
import { Switch } from '../../inputs/Switch/Switch'
import { Tag } from '../../tags/Tag'
import { SubscriptionBillingCycle } from '@radzionkit/entities/Subscription'

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
