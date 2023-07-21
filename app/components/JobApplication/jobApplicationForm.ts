import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const bioMaxLength = 300
export const responsibilityMaxLength = 300

interface JobExperienceShape {
  position: string
  responsibility: string
}

export interface JobApplicationFormShape {
  name: string
  bio: string
  experience: JobExperienceShape[]
}

const schema: yup.SchemaOf<JobApplicationFormShape> = yup.object({
  name: yup.string().max(100).required(),
  bio: yup.string().max(bioMaxLength).required(),
  experience: yup
    .array()
    .of(
      yup.object({
        position: yup.string().min(4).required(),
        responsibility: yup
          .string()
          .min(10)
          .max(responsibilityMaxLength)
          .required(),
      }),
    )
    .required(),
})

export const emptyExperience: JobExperienceShape = {
  position: '',
  responsibility: '',
}

export const useJobApplicationForm = () => {
  return useForm<JobApplicationFormShape>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      experience: [emptyExperience],
    },
  })
}
