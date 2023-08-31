import type { NextPage } from 'next'
import { Form } from '@reactkit/ui/ui/Form/Form'
import { TextInput } from '@reactkit/ui/ui/inputs/TextInput'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { LanguagesInput } from 'components/LanguagesInput'
import { DemoPage } from 'components/DemoPage'
import { Panel } from '@reactkit/ui/ui/Panel/Panel'
import { TitledSection } from '@reactkit/ui/ui/Layout/TitledSection'
import { FixedOptionsInput } from '@reactkit/ui/ui/inputs/Combobox/FixedOptionsInput'
import { capitalizeFirstLetter } from '@reactkit/utils/capitalizeFirstLetter'
import { Button } from '@reactkit/ui/ui/buttons/Button'

interface FormShape {
  name: string
  languages: string[]
}

const schema: yup.SchemaOf<FormShape> = yup
  .object({
    name: yup.string().max(100).required(),
    languages: yup.array().min(1),
  })
  .required()

const ComboboxPage: NextPage = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<FormShape>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      languages: [],
    },
  })

  return (
    <DemoPage title="Combobox" youtubeVideoId="iZGQE3-pqpg">
      <Panel width={400}>
        <TitledSection title="Who are You?">
          <Form
            content={
              <>
                <TextInput
                  label="Full name"
                  {...register('name')}
                  error={errors.name?.message}
                  autoFocus
                  placeholder="John Johnson"
                />
                <Controller
                  control={control}
                  name="languages"
                  render={({ field: { value, onChange, ref } }) => (
                    <LanguagesInput
                      value={value}
                      onChange={onChange}
                      ref={ref}
                      error={errors.languages?.message}
                    />
                  )}
                />
                <FixedOptionsInput
                  label="Loading example"
                  isLoading
                  placeholder="Languages"
                  value={null}
                  onChange={() => {}}
                  options={['one', 'two', 'three']}
                  optionToString={capitalizeFirstLetter}
                />
                <FixedOptionsInput
                  label="No options example"
                  placeholder="Languages"
                  value={null}
                  onChange={() => {}}
                  options={[]}
                  optionToString={capitalizeFirstLetter}
                />
              </>
            }
            onSubmit={handleSubmit(console.log)}
            actions={<Button size="l">Submit</Button>}
          />
        </TitledSection>
      </Panel>
    </DemoPage>
  )
}

export default ComboboxPage
