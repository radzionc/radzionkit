import { TextInput } from '@radzionkit/ui/inputs/TextInput'
import { TextArea } from '@radzionkit/ui/inputs/TextArea'
import { bioMaxLength, useJobApplicationForm } from './jobApplicationForm'
import { ExperienceSection } from './ExperienceSection'
import { Panel } from '@radzionkit/ui/panel/Panel'
import { Button } from '@radzionkit/ui/buttons/Button'
import { TitledSection } from '@radzionkit/ui/layout/TitledSection'
import { Form } from '@radzionkit/ui/form/components/Form'
import { FormSection } from '@radzionkit/ui/form/components/FormSection'

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
          actions={<Button size="l">Submit</Button>}
        />
      </TitledSection>
    </Panel>
  )
}
