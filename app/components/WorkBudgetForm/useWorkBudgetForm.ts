import { yupResolver } from '@hookform/resolvers/yup'
import { minutesInHour } from 'date-fns'
import { useForm } from 'react-hook-form'

import * as yup from 'yup'

const maxHoursPerDay = 10
export const maxMinPerDay = maxHoursPerDay * minutesInHour

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
      workdayMinutes: 5 * minutesInHour,
      weekendMinutes: 3 * minutesInHour,
    },
    resolver: yupResolver(formSchema),
  })
}
