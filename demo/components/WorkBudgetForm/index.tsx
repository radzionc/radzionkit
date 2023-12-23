import { formatDuration } from '@radzionkit/utils/time/formatDuration'
import { DistributionBar } from '@radzionkit/ui/charts/DistributionBar'
import { AmountInput } from '@radzionkit/ui/inputs/Slider/AmountInput'
import { Panel } from '@radzionkit/ui/panel/Panel'
import { VStack } from '@radzionkit/ui/layout/Stack'
import { Controller, useWatch } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { useWorkBudgetForm } from './useWorkBudgetForm'
import { MIN_IN_HOUR } from '@radzionkit/utils/time'
import { TitledSection } from '@radzionkit/ui/layout/TitledSection'

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
