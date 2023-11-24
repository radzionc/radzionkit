import { UseFormReturn, useFieldArray } from 'react-hook-form'
import { FormSection } from '@reactkit/ui/form/components/FormSection'

import { HStack, VStack } from '@reactkit/ui/layout/Stack'
import { Line } from '@reactkit/ui/layout/Line'
import styled from 'styled-components'
import { Text } from '@reactkit/ui/text'
import { TextArea } from '@reactkit/ui/inputs/TextArea'
import { TextInput } from '@reactkit/ui/inputs/TextInput'
import { Circle } from '@reactkit/ui/layout/Circle'
import {
  emptyExperience,
  JobApplicationFormShape,
  responsibilityMaxLength,
} from './jobApplicationForm'
import { TrashIcon } from '@reactkit/ui/icons/TrashIcon'
import { Button } from '@reactkit/ui/buttons/Button'
import { getColor } from '@reactkit/ui/theme/getters'
import { IconButton } from '@reactkit/ui/buttons/IconButton'

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
            <VStack fullWidth gap={16}>
              <TextInput
                label="Position"
                {...register(`experience.${index}.position`)}
                error={errors.experience?.[index]?.position?.message}
                placeholder="Senior Front End Engineer"
              />
              <TextArea
                label="Responsibility"
                {...register(`experience.${index}.responsibility`)}
                error={errors.experience?.[index]?.responsibility?.message}
                rows={3}
                placeholder="I was responsible for ..."
                maxLength={responsibilityMaxLength}
              />
            </VStack>
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
