import { TextInput } from '@lib/ui/inputs/TextInput'
import { Controller, useForm } from 'react-hook-form'
import { TextArea } from '@lib/ui/inputs/TextArea'
import { DemoPage } from '@demo/app/components/DemoPage'
import { Panel } from '@lib/ui/panel/Panel'
import { TitledSection } from '@lib/ui/layout/TitledSection'
import { AmountTextInput } from '@lib/ui/inputs/AmountTextInput'
import { DollarIcon } from '@lib/ui/icons/DollarIcon'
import { Button } from '@lib/ui/buttons/Button'
import { Form } from '@lib/ui/form/components/Form'
import { Field } from '@lib/ui/inputs/Field'
import { makeDemoPage } from '@demo/app/layout/makeDemoPage'

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
