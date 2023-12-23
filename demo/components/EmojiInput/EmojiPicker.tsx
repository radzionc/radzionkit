import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { SelectableComponentProps } from '@radzionkit/ui/props'
import { useTheme } from 'styled-components'

const EmojiPicker = ({ onSelect }: SelectableComponentProps<string>) => {
  const { name } = useTheme()

  return (
    <Picker
      autoFocus
      data={data}
      theme={name}
      showPreview={false}
      showSkinTones={false}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onEmojiSelect={(emoji: any) => {
        if (!emoji?.native) return

        onSelect(emoji.native)
      }}
    />
  )
}

export default EmojiPicker
