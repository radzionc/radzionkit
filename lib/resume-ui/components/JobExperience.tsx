import { IconWrapper } from '@lib/ui/icons/IconWrapper'
import { HStack, VStack } from '@lib/ui/layout/Stack'
import { dotSeparator } from '@lib/ui/layout/StackSeparatedBy'
import { Text } from '@lib/ui/text'
import { ReactNode } from 'react'
import { formatDistance } from 'date-fns'
import { capitalizeFirstLetter } from '@lib/utils/capitalizeFirstLetter'

type JobExperienceProps = {
  position: string
  company: string
  companyIcon?: ReactNode
  startedAt: Date
  finishedAt?: Date
  responsibilities: ReactNode[]
  technologies?: string[]
}

const { format: formatDate } = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
})

export const JobExperience = ({
  position,
  company,
  responsibilities,
  startedAt,
  finishedAt,
  companyIcon,
  technologies,
}: JobExperienceProps) => {
  return (
    <VStack gap={8}>
      <HStack alignItems="center" gap={8}>
        <Text color="contrast" weight="semibold" size={16}>
          {position}{' '}
          <Text as="span" color="shy">
            at
          </Text>{' '}
          {company}
        </Text>
        {companyIcon && <IconWrapper>{companyIcon}</IconWrapper>}
      </HStack>

      <HStack alignItems="center" gap={8}>
        <Text weight="semibold" size={14}>
          {capitalizeFirstLetter(
            formatDistance(finishedAt ?? new Date(), startedAt),
          )}
        </Text>
        <Text size={14} color="supporting">
          ({formatDate(startedAt)} -{' '}
          {finishedAt ? formatDate(finishedAt) : 'Present'})
        </Text>
      </HStack>
      <VStack gap={8}>
        {responsibilities.map((responsibility, index) => (
          <HStack key={index} gap={4}>
            <Text color="shy">{dotSeparator}</Text>
            <Text color="supporting">{responsibility}</Text>
          </HStack>
        ))}
        {technologies && (
          <HStack gap={4}>
            <Text size={14} color="shy">
              Stack:
            </Text>
            <Text color="supporting" size={14}>
              {technologies.join(', ')}
            </Text>
          </HStack>
        )}
      </VStack>
    </VStack>
  )
}
