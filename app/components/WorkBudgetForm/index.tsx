import { formatDuration } from '@reactkit/utils/time/formatDuration'
import { DistributionBar } from '@reactkit/ui/ui/DistributionBar'
import { AmountInput } from '@reactkit/ui/ui/inputs/Slider/AmountInput'
import { TitledSection } from '@reactkit/ui/ui/Layout/TitledSection'
import { Panel } from '@reactkit/ui/ui/Panel/Panel'
import { VStack } from '@reactkit/ui/ui/Stack'
import { Controller, useWatch } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { useWorkBudgetForm } from './useWorkBudgetForm'
import { MIN_IN_HOUR } from '@reactkit/utils/time'

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
    <Panel width={400}>
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
