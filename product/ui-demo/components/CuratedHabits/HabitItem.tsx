import { Button } from '@lib/ui/buttons/Button'
import { VStack, HStack } from '@lib/ui/css/stack'
import { ExternalLink } from '@lib/ui/navigation/Link/ExternalLink'
import { Tag } from '@lib/ui/tags/Tag'
import { Text } from '@lib/ui/text'
import styled, { useTheme } from 'styled-components'

import { HabitInfo } from './data/habits'

interface HabitItemTag {
  name: string
  color: number
}

interface HabitItemProps extends HabitInfo {
  tags: HabitItemTag[]
}

const Container = styled(VStack)`
  min-width: 320px;
`

export const HabitItem = ({
  name,
  emoji,
  description,
  tags,
}: HabitItemProps) => {
  const {
    colors: { getLabelColor },
  } = useTheme()

  return (
    <Container gap={8}>
      <HStack alignItems="start" gap={8} justifyContent="space-between">
        <VStack gap={4}>
          <Text weight="600">
            <Text color="contrast" style={{ marginRight: 8 }} as="span">
              {emoji}
            </Text>
            {name}
          </Text>
          <HStack gap={8} wrap="wrap">
            {tags.map(({ color, name }) => (
              <Tag $color={getLabelColor(color)} key={name}>
                {name}
              </Tag>
            ))}
          </HStack>
        </VStack>
        <ExternalLink to="https://increaser.org">
          <Button isRounded as="div" kind="secondary">
            Add
          </Button>
        </ExternalLink>
      </HStack>

      <Text size={14} color="supporting">
        {description}
      </Text>
    </Container>
  )
}
