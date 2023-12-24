import { TextInput } from '@radzionkit/ui/inputs/TextInput'
import { Controller, useForm } from 'react-hook-form'
import { TextArea } from '@radzionkit/ui/inputs/TextArea'
import { DemoPage } from 'components/DemoPage'
import { Panel } from '@radzionkit/ui/panel/Panel'
import { TitledSection } from '@radzionkit/ui/layout/TitledSection'
import { AmountTextInput } from '@radzionkit/ui/inputs/AmountTextInput'
import { DollarIcon } from '@radzionkit/ui/icons/DollarIcon'
import { Button } from '@radzionkit/ui/buttons/Button'
import { Form } from '@radzionkit/ui/form/components/Form'
import { Field } from '@radzionkit/ui/inputs/Field'
import { makeDemoPage } from 'layout/makeDemoPage'

interface FormShape {
  name: string
  bio: string
  salary: number
}

const bioMaxLength = 300

export default makeDemoPage(() => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<FormShape>({
    mode: 'onSubmit',
    // TODO: add a resolver
  })

  return (
    <DemoPage youtubeVideoId="V3scoHuQ19s" title="Text Input">
      <Panel width={400}>
        <TitledSection title="Who are You?">
          <Form
            content={
              <>
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
                <Field error={errors.salary?.message}>
                  <Controller
                    control={control}
                    name="salary"
                    render={({ field: { onChange, ...props } }) => (
                      <AmountTextInput
                        type="number"
                        label="Salary"
                        placeholder="Enter amount"
                        onValueChange={onChange}
                        unit={<DollarIcon />}
                        {...props}
                      />
                    )}
                  />
                </Field>
              </>
            }
            onSubmit={handleSubmit(console.log)}
            actions={<Button size="l">Submit</Button>}
          />
        </TitledSection>
      </Panel>
    </DemoPage>
  )
})
