import { yupResolver } from '@hookform/resolvers/yup'
import { MIN_IN_HOUR } from '@reactkit/utils/time'
import { useForm } from 'react-hook-form'

import * as yup from 'yup'

const maxHoursPerDay = 10
export const maxMinPerDay = maxHoursPerDay * MIN_IN_HOUR

export interface WorkBudgetFormShape {
  workdayMinutes: number
  weekendMinutes: number
}

export const useWorkBudgetForm = () => {
  const formSchema = yup
    .object()
    .shape({
      workdayMinutes: yup.number().min(0).max(maxMinPerDay).required(),
      weekendMinutes: yup.number().min(0).max(maxMinPerDay).required(),
    })
    .required()

  return useForm<WorkBudgetFormShape>({
    mode: 'onSubmit',
    defaultValues: {
      workdayMinutes: 5 * MIN_IN_HOUR,
      weekendMinutes: 3 * MIN_IN_HOUR,
    },
    resolver: yupResolver(formSchema),
  })
}
