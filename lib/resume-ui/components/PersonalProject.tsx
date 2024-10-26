import { ExternalLink } from '@lib/ui/navigation/Link/ExternalLink'
import { HStack, VStack } from '@lib/ui/css/stack'
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
  icon?: ReactNode
}

const Title = styled(Text)`
  border-bottom: 1px dashed;
  ${transition}
  line-height: 1.24;
`

const Badge = styled.div`
  padding: 4px 8px;
  background: ${getColor('mist')};
  ${round};
`

const Link = styled(ExternalLink)`
  &:hover ${Title} {
    color: ${getColor('textPrimary')};
  }
`

export const PersonalProject = ({
  name,
  url,
  description,
  achievement,
  responsibilities,
  icon,
}: Props) => {
  return (
    <VStack alignItems="start" gap={4}>
      <HStack alignItems="center" gap={16}>
        <Link to={url}>
          <HStack alignItems="center" gap={8}>
            {icon}
            <Title centerVertically color="contrast" weight="600">
              {name}
            </Title>
          </HStack>
        </Link>
        {achievement && (
          <Badge>
            <Text as="div" color="supporting" weight="500" size={14}>
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
