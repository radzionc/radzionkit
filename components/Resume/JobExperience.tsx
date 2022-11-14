import { formatDistance } from "date-fns";
import { LabeledValue } from "lib/ui/LabeledValue";
import { SeparatedBy, dotSeparator } from "lib/ui/SeparatedBy";
import { HStack, VStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";

interface Props {
  position: string;
  company: string;
  startedAt: Date;
  finishedAt?: Date;
  responsibilities: string[];
  technologies?: string[];
}

const formatDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
}).format;

export const JobExperience = ({
  position,
  company,
  startedAt,
  finishedAt,
  responsibilities,
  technologies,
}: Props) => {
  return (
    <VStack gap={4}>
      <Text weight="bold">
        {position}
        <Text as="span" color="supporting">
          {" "}
          at {company}
        </Text>
      </Text>
      <SeparatedBy separator={dotSeparator}>
        <Text size={14} color="supporting">
          {formatDate(startedAt)} -{" "}
          {finishedAt ? formatDate(finishedAt) : "Present"}
        </Text>
        <Text color="supporting2" size={14}>
          {formatDistance(finishedAt ?? new Date(), startedAt)}
        </Text>
      </SeparatedBy>
      <VStack gap={4}>
        {responsibilities.map((responsibility, index) => (
          <HStack key={index} gap={4}>
            <Text color="supporting3">{dotSeparator}</Text>
            <Text color="supporting">{responsibility}</Text>
          </HStack>
        ))}
      </VStack>
      {technologies && (
        <HStack gap={4}>
          <Text size={14} color="supporting3">
            Stack:
          </Text>
          <Text size={14}>{technologies.join(", ")}</Text>
        </HStack>
      )}
    </VStack>
  );
};
