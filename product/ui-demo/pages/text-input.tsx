import { Button } from '@lib/ui/buttons/Button'
import { Panel } from '@lib/ui/css/panel'
import { Form } from '@lib/ui/form/components/Form'
import { DollarIcon } from '@lib/ui/icons/DollarIcon'
import { AmountTextInput } from '@lib/ui/inputs/AmountTextInput'
import { Field } from '@lib/ui/inputs/Field'
import { TextArea } from '@lib/ui/inputs/TextArea'
import { TextInput } from '@lib/ui/inputs/TextInput'
import { TitledSection } from '@lib/ui/layout/TitledSection'
import { DemoPage } from '@product/ui-demo/components/DemoPage'
import { makeDemoPage } from '@product/ui-demo/layout/makeDemoPage'
import { Controller, useForm } from 'react-hook-form'

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
      <Panel style={{ width: 400 }}>
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
