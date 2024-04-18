import { Text } from '@lib/ui/text'

interface Props {
  emoji: string
  marginRight?: number
  size?: number
}

export const EmojiTextPrefix = ({ emoji, size, marginRight = 8 }: Props) => (
  <Text size={size} color="contrast" style={{ marginRight }} as="span">
    {emoji}
  </Text>
)
