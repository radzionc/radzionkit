import { Text } from '@lib/ui/text'
import { ReactNode } from 'react'

interface Props {
  emoji: ReactNode
  marginRight?: number
  size?: number
}

export const EmojiTextPrefix = ({ emoji, size, marginRight = 8 }: Props) => (
  <Text size={size} color="contrast" style={{ marginRight }} as="span">
    {emoji}
  </Text>
)
