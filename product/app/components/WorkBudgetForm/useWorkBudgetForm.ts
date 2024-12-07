import { MIN_IN_HOUR } from '@lib/utils/time'
import { useForm } from 'react-hook-form'

const maxHoursPerDay = 10
export const maxMinPerDay = maxHoursPerDay * MIN_IN_HOUR

export interface WorkBudgetFormShape {
  workdayMinutes: number
  weekendMinutes: number
}

export const useWorkBudgetForm = () => {
  return useForm<WorkBudgetFormShape>({
    mode: 'onSubmit',
    defaultValues: {
      workdayMinutes: 5 * MIN_IN_HOUR,
      weekendMinutes: 3 * MIN_IN_HOUR,
    },
    // TODO: add a resolver
  })
}
