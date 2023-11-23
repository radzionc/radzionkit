import { Spinner } from '@reactkit/ui/loaders/Spinner'
import { HStack } from '@reactkit/ui/layout/Stack'
import { centerContent } from '@reactkit/ui/css/centerContent'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import { ExpandableInputOpener } from '@reactkit/ui/inputs/ExpandableInputOpener'
import { Menu } from '@reactkit/ui/menu'
import { Text } from '@reactkit/ui/text'
import { InputProps } from '@reactkit/ui/props'

const EmojiPicker = dynamic(() => import('./EmojiPicker'), {
  loading: () => (
    <EmojiMartFallback>
      <HStack gap={4} alignItems="center">
        <Spinner />
        <Text>Loading emoji picker</Text>
      </HStack>
    </EmojiMartFallback>
  ),
  ssr: false,
})

interface EmojiInputProps extends InputProps<string> {}

const EmojiMartFallback = styled.div`
  width: 352px;
  height: 435px;
  ${centerContent};
`

export const EmojiInput = ({ value, onChange }: EmojiInputProps) => {
  return (
    <Menu
      title="Select an emoji"
      renderOpener={(props) => (
        <ExpandableInputOpener type="button" {...props}>
          <Text color="contrast" size={32}>
            {value}
          </Text>
        </ExpandableInputOpener>
      )}
      renderContent={({ onClose }) => (
        <EmojiPicker
          onSelect={(value) => {
            onChange(value)
            onClose()
          }}
        />
      )}
    />
  )
}
