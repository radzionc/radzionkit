import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { SelectableComponentProps } from '@lib/ui/props'
import { useTheme } from 'styled-components'

type Emoji = {
  native: string
}

const EmojiPicker = ({ onSelect }: SelectableComponentProps<string>) => {
  const { name } = useTheme()

  return (
    <Picker
      autoFocus
      data={data}
      theme={name}
      showPreview={false}
      showSkinTones={false}
      onEmojiSelect={(emoji?: Emoji) => {
        if (!emoji?.native) return

        onSelect(emoji.native)
      }}
    />
  )
}

export default EmojiPicker
