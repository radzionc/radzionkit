import { ExternalLink } from '@lib/ui/navigation/Link/ExternalLink'
import { HStack, VStack } from '@lib/ui/layout/Stack'
import { Text } from '@lib/ui/text'
import styled from 'styled-components'
import { getColor } from '@lib/ui/theme/getters'
import { round } from '@lib/ui/css/round'
import { transition } from '@lib/ui/css/transition'
import { dotSeparator } from '@lib/ui/layout/StackSeparatedBy'
import { ReactNode } from 'react'

interface Props {
  name: string
  url: string
  description: string
  achievement?: ReactNode
  responsibilities?: string[]
}

const Title = styled(Text)`
  border-bottom: 1px dashed;
  ${transition}
  line-height: 1.24;

  &:hover {
    color: ${getColor('primary')};
  }
`

const Badge = styled.div`
  padding: 4px 8px;
  background: ${getColor('mist')};
  ${round};
`

export const PersonalProject = ({
  name,
  url,
  description,
  achievement,
  responsibilities,
}: Props) => {
  return (
    <VStack alignItems="start" gap={4}>
      <HStack alignItems="center" gap={16}>
        <ExternalLink to={url}>
          <Title color="contrast" weight="bold">
            {name}
          </Title>{' '}
        </ExternalLink>
        {achievement && (
          <Badge>
            <Text as="div" color="supporting" weight="semibold" size={14}>
              {achievement}
            </Text>
          </Badge>
        )}
      </HStack>
      <Text color="supporting">{description}</Text>
      {responsibilities && (
        <VStack gap={8}>
          {responsibilities.map((responsibility, index) => (
            <HStack key={index} gap={4}>
              <Text color="shy">{dotSeparator}</Text>
              <Text color="supporting">{responsibility}</Text>
            </HStack>
          ))}
        </VStack>
      )}
    </VStack>
  )
}
