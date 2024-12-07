import { useForm } from 'react-hook-form'

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

export const emptyExperience: JobExperienceShape = {
  position: '',
  responsibility: '',
}

export const useJobApplicationForm = () => {
  return useForm<JobApplicationFormShape>({
    mode: 'onSubmit',
    // TODO: add a resolver
    defaultValues: {
      experience: [emptyExperience],
    },
  })
}
