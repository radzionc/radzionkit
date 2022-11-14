import { formatDistance } from "date-fns";
import { SeparatedBy, dotSeparator } from "lib/ui/SeparatedBy";
import { VStack } from "lib/ui/Stack";
import { Text } from "lib/ui/Text";

interface Props {
  position: string;
  company: string;
  startedAt: Date;
  finishedAt?: Date;
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
    </VStack>
  );
};
