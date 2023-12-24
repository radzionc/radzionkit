import { UseFormReturn, useFieldArray } from 'react-hook-form'
import { FormSection } from '@radzionkit/ui/form/components/FormSection'

import { HStack, VStack } from '@radzionkit/ui/layout/Stack'
import { Line } from '@radzionkit/ui/layout/Line'
import styled from 'styled-components'
import { Text } from '@radzionkit/ui/text'
import { TextArea } from '@radzionkit/ui/inputs/TextArea'
import { TextInput } from '@radzionkit/ui/inputs/TextInput'
import { Circle } from '@radzionkit/ui/layout/Circle'
import {
  emptyExperience,
  JobApplicationFormShape,
  responsibilityMaxLength,
} from './jobApplicationForm'
import { TrashIcon } from '@radzionkit/ui/icons/TrashIcon'
import { Button } from '@radzionkit/ui/buttons/Button'
import { getColor } from '@radzionkit/ui/theme/getters'
import { IconButton } from '@radzionkit/ui/buttons/IconButton'
import { Field } from '@radzionkit/ui/inputs/Field'
import { Fields } from '@radzionkit/ui/inputs/Fields'

export interface Props {
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
          <Line />
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
