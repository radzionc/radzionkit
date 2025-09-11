import { Button } from '@lib/ui/buttons/Button'
import { IconButton } from '@lib/ui/buttons/IconButton'
import { HStack, VStack } from '@lib/ui/css/stack'
import { FormSection } from '@lib/ui/form/components/FormSection'
import { TrashIcon } from '@lib/ui/icons/TrashIcon'
import { Field } from '@lib/ui/inputs/Field'
import { Fields } from '@lib/ui/inputs/Fields'
import { TextArea } from '@lib/ui/inputs/TextArea'
import { TextInput } from '@lib/ui/inputs/TextInput'
import { Circle } from '@lib/ui/layout/Circle'
import { LineSeparator } from '@lib/ui/layout/LineSeparator'
import { Text } from '@lib/ui/text'
import { getColor } from '@lib/ui/theme/getters'
import { UseFormReturn, useFieldArray } from 'react-hook-form'
import styled from 'styled-components'

import {
  emptyExperience,
  JobApplicationFormShape,
  responsibilityMaxLength,
} from './jobApplicationForm'

type Props = {
  form: UseFormReturn<JobApplicationFormShape, any>
}

const manageElementSizeInPx = 48

const ExperienceNumber = styled(Circle)`
  background: ${getColor('mist')};
`

export const ExperienceSection = ({
  form: {
    control,
    register,
    formState: { errors },
  },
}: Props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'experience',
  })

  return (
    <FormSection name="Experience">
      {fields.map((field, index) => (
        <VStack key={index} fullWidth gap={16}>
          <HStack fullWidth gap={24}>
            <VStack gap={8}>
              <ExperienceNumber size={manageElementSizeInPx}>
                <Text>{index + 1}</Text>
              </ExperienceNumber>
              <IconButton
                title="Remove experience"
                onClick={() => remove(index)}
                kind="alert"
                as="div"
                size="l"
                icon={<TrashIcon />}
              />
            </VStack>
            <Fields>
              <Field error={errors.experience?.[index]?.position?.message}>
                <TextInput
                  label="Position"
                  {...register(`experience.${index}.position`)}
                  placeholder="Senior Front End Engineer"
                />
              </Field>
              <Field
                error={errors.experience?.[index]?.responsibility?.message}
              >
                <TextArea
                  label="Responsibility"
                  {...register(`experience.${index}.responsibility`)}
                  rows={3}
                  placeholder="I was responsible for ..."
                  maxLength={responsibilityMaxLength}
                />
              </Field>
            </Fields>
          </HStack>
          <LineSeparator layout="column" />
        </VStack>
      ))}
      <VStack alignItems="start">
        <Button
          type="button"
          kind="outlined"
          isRounded
          onClick={() => append(emptyExperience)}
        >
          Add experience
        </Button>
      </VStack>
    </FormSection>
  )
}
