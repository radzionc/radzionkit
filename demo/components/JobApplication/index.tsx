import { TextInput } from '@radzionkit/ui/inputs/TextInput'
import { TextArea } from '@radzionkit/ui/inputs/TextArea'
import { bioMaxLength, useJobApplicationForm } from './jobApplicationForm'
import { ExperienceSection } from './ExperienceSection'
import { Panel } from '@radzionkit/ui/panel/Panel'
import { Button } from '@radzionkit/ui/buttons/Button'
import { TitledSection } from '@radzionkit/ui/layout/TitledSection'
import { Form } from '@radzionkit/ui/form/components/Form'
import { FormSection } from '@radzionkit/ui/form/components/FormSection'
import { Field } from '@radzionkit/ui/inputs/Field'

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
                <Field error={errors.name?.message}>
                  <TextInput
                    label="Full name"
                    {...register('name')}
                    autoFocus
                    placeholder="John Johnson"
                  />
                </Field>
                <Field error={errors.bio?.message}>
                  <TextArea
                    rows={4}
                    maxLength={bioMaxLength}
                    label="Bio"
                    {...register('bio')}
                    placeholder="I'm a software engineer..."
                  />
                </Field>
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
