import { Button } from '@lib/ui/buttons/Button'
import { Panel } from '@lib/ui/css/panel'
import { Form } from '@lib/ui/form/components/Form'
import { FormSection } from '@lib/ui/form/components/FormSection'
import { Field } from '@lib/ui/inputs/Field'
import { TextArea } from '@lib/ui/inputs/TextArea'
import { TextInput } from '@lib/ui/inputs/TextInput'
import { TitledSection } from '@lib/ui/layout/TitledSection'

import { ExperienceSection } from './ExperienceSection'
import { bioMaxLength, useJobApplicationForm } from './jobApplicationForm'

export const JobApplication = () => {
  const form = useJobApplicationForm()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form

  return (
    <Panel style={{ width: 480 }}>
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
