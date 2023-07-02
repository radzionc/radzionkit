import { UseFormReturn, useFieldArray } from "react-hook-form"
import { FormSection } from "lib/ui/Form/FormSection"

import { HStack, VStack } from "lib/ui/Stack"
import { Line } from "lib/ui/Line"
import styled from "styled-components"
import { Text } from "lib/ui/Text"
import { TextArea } from "lib/ui/inputs/TextArea"
import { TextInput } from "lib/ui/inputs/TextInput"
import { Circle } from "lib/ui/Circle"
import {
  emptyExperience,
  JobApplicationFormShape,
  responsibilityMaxLength,
} from "./jobApplicationForm"
import { TrashIcon } from "lib/ui/icons/TrashIcon"
import { IconButton } from "lib/ui/buttons/square/IconButton"
import { Button } from "lib/ui/buttons/Button"

export interface Props {
  form: UseFormReturn<JobApplicationFormShape, any>
}

const manageElementSizeInPx = 48

const ExperienceNumber = styled(Circle)`
  background: ${({ theme }) => theme.colors.mist.toCssValue()};
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
    name: "experience",
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
