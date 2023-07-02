import { formatDistance } from "date-fns"
import { StackSeparatedBy, dotSeparator } from "lib/ui/StackSeparatedBy"
import { HStack, VStack } from "lib/ui/Stack"
import { Text } from "lib/ui/Text"
import { Responsibilities } from "./Responsibilities"

interface Props {
  position: string
  company: string
  startedAt: Date
  finishedAt?: Date
  responsibilities: string[]
  technologies?: string[]
}

const formatDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
}).format

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
      <StackSeparatedBy
        alignItems="center"
        direction="row"
        gap={8}
        separator={<Text color="supporting">{dotSeparator}</Text>}
      >
        <Text size={14} color="supporting">
          {formatDate(startedAt)} -{" "}
          {finishedAt ? formatDate(finishedAt) : "Present"}
        </Text>
        <Text color="shy" size={14}>
          {formatDistance(finishedAt ?? new Date(), startedAt)}
        </Text>
      </StackSeparatedBy>
      <Responsibilities items={responsibilities} />
      {technologies && (
        <HStack gap={4}>
          <Text size={14} color="shy">
            Stack:
          </Text>
          <Text size={14}>{technologies.join(", ")}</Text>
        </HStack>
      )}
    </VStack>
  )
}
