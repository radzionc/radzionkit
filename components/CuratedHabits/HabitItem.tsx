import { VStack, HStack } from "lib/ui/Stack"
import { centerContentCSS } from "lib/ui/utils/centerContentCSS"
import { getHorizontalPaddingCSS } from "lib/ui/utils/getHorizontalPaddingCSS"
import styled, { useTheme } from "styled-components"
import { HabitInfo } from "./data/habits"
import { Text } from "lib/ui/Text"
import { Tag } from "lib/ui/Tag"
import { Button } from "lib/ui/buttons/Button"
import { ExternalLink } from "lib/navigation/Link/ExternalLink"

const Added = styled.div`
  background: transparent;
  ${getHorizontalPaddingCSS(20)}
  height: 40px;
  font-weight: 600px;
  ${centerContentCSS};
`

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
