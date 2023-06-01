import { SubmitFormButton } from 'lib/ui/buttons/rect/SubmitFormButton'
import { Form } from 'lib/ui/Form/Form'
import { TextInput } from 'lib/ui/inputs/TextInput'
import { TextArea } from 'lib/ui/inputs/TextArea'
import { FormSection } from 'lib/ui/Form/FormSection'
import { bioMaxLength, useJobApplicationForm } from './jobApplicationForm'
import { ExperienceSection } from './ExperienceSection'
import { Panel } from 'lib/ui/Panel/Panel'
import { TitledSection } from 'lib/ui/Layout/TitledSection'

export const JobApplication = () => {
  const form = useJobApplicationForm()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form

  return (
    <Panel width={480}>
      <TitledSection title="Job Application">
        <Form
          gap={48}
          content={
            <>
              <FormSection name="General info">
                <TextInput
                  label="Full name"
                  {...register('name')}
                  error={errors.name?.message}
                  autoFocus
                  placeholder="John Johnson"
                />
                <TextArea
                  rows={4}
                  maxLength={bioMaxLength}
                  label="Bio"
                  {...register('bio')}
                  error={errors.bio?.message}
                  placeholder="I'm a software engineer..."
                />
              </FormSection>
              <ExperienceSection form={form} />
            </>
          }
          onSubmit={handleSubmit(console.log)}
          actions={<SubmitFormButton text="Submit" />}
        />
      </TitledSection>
    </Panel>
  )
}
