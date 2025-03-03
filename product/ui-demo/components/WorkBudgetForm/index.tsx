import { DistributionBar } from '@lib/ui/charts/DistributionBar'
import { Panel } from '@lib/ui/css/panel'
import { VStack } from '@lib/ui/css/stack'
import { AmountInput } from '@lib/ui/inputs/Slider/AmountInput'
import { TitledSection } from '@lib/ui/layout/TitledSection'
import { MIN_IN_HOUR } from '@lib/utils/time'
import { formatDuration } from '@lib/utils/time/formatDuration'
import { Controller, useWatch } from 'react-hook-form'
import { useTheme } from 'styled-components'

import { useWorkBudgetForm } from './useWorkBudgetForm'

const minuteStep = 30

const maxMinPerDay = 10 * MIN_IN_HOUR

export const WorkBudgetForm = () => {
  const form = useWorkBudgetForm()

  const { control } = form

  const theme = useTheme()

  const workdayMinutes = useWatch({
    control,
    name: 'workdayMinutes',
  })
  const weekendMinutes = useWatch({
    control,
    name: 'weekendMinutes',
  })

  const workdayColor = theme.colors.success
  const weekendColor = theme.colors.idle

  return (
    <Panel style={{ width: 400 }}>
      <TitledSection title="Work Budget">
        <VStack fullWidth gap={16}>
          <VStack fullWidth gap={8}>
            <Controller
              control={control}
              name="workdayMinutes"
              render={({ field: { value, onChange } }) => (
                <AmountInput
                  min={0}
                  color={workdayColor}
                  label="Workday"
                  value={value}
                  onChange={onChange}
                  step={minuteStep}
                  max={maxMinPerDay}
                  formatValue={(value) => formatDuration(value, 'min')}
                />
              )}
            />

            <Controller
              control={control}
              name="weekendMinutes"
              render={({ field: { value, onChange } }) => (
                <AmountInput
                  min={0}
                  label="Weekend"
                  color={weekendColor}
                  value={value}
                  onChange={onChange}
                  step={minuteStep}
                  max={maxMinPerDay}
                  formatValue={(value) => formatDuration(value, 'min')}
                />
              )}
            />
          </VStack>
          <DistributionBar
            items={[
              { value: workdayMinutes * 5, color: workdayColor },
              { value: weekendMinutes * 2, color: weekendColor },
            ]}
          />
        </VStack>
      </TitledSection>
    </Panel>
  )
}
