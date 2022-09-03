import { UseFormReturn, useFieldArray } from "react-hook-form";
import { FormSection } from "ui/Form/FormSection";

import { HStack, VStack } from "ui/Stack";
import { Line } from "ui/Line";
import styled from "styled-components";
import { Text } from "ui/Text";
import { UnstyledButton } from "ui/buttons/UnstyledButton";
import { getSameDimensionsCSS } from "ui/utils/getSameDimensionsCSS";
import { centerContentCSS } from "ui/utils/centerContentCSS";
import { defaultTransitionCSS } from "ui/animations/transitions";
import { TextArea } from "ui/inputs/TextArea";
import { TextInput } from "ui/inputs/TextInput";
import { Circle } from "ui/Circle";
import { roundedCSS } from "ui/utils/roundedCSS";
import {
  emptyExperience,
  JobApplicationFormShape,
  responsibilityMaxLength,
} from "./jobApplicationForm";
import { TrashIcon } from "ui/icons/TrashIcon";
import { OutlinedButton } from "ui/buttons/rect/OutlinedButton";
import { IconButton } from "ui/buttons/square/IconButton";

export interface Props {
  form: UseFormReturn<JobApplicationFormShape, any>;
}

const manageElementSizeInPx = 48;

const CharacterNumber = styled(Circle)`
  background: ${({ theme }) => theme.colors.backgroundGlass.toCssValue()};
`;

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
  });

  return (
    <FormSection name="Experience">
      {fields.map((field, index) => (
        <VStack key={index} fullWidth gap={16}>
          <HStack fullWidth gap={24}>
            <VStack gap={8}>
              <CharacterNumber size={manageElementSizeInPx}>
                <Text>{index + 1}</Text>
              </CharacterNumber>
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
        <OutlinedButton
          type="button"
          isRounded
          onClick={() => append(emptyExperience)}
        >
          Add experience
        </OutlinedButton>
      </VStack>
    </FormSection>
  );
};
