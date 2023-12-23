import { VStack, HStack } from '@radzionkit/ui/layout/Stack'
import styled, { useTheme } from 'styled-components'
import { HabitInfo } from './data/habits'
import { Text } from '@radzionkit/ui/text'
import { Tag } from '@radzionkit/ui/tags/Tag'
import { Button } from '@radzionkit/ui/buttons/Button'
import { ExternalLink } from '@radzionkit/ui/navigation/Link/ExternalLink'

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
          <Text weight="bold">
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
