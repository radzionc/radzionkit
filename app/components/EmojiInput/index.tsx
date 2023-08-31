import { Spinner } from '@reactkit/ui/ui/Spinner'
import { HStack } from '@reactkit/ui/ui/Stack'
import { centerContentCSS } from '@reactkit/ui/ui/utils/centerContentCSS'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import { ExpandableInputOpener } from '../../../ui/ui/inputs/ExpandableInputOpener'
import { Menu } from '@reactkit/ui/ui/Menu'
import { Text } from '@reactkit/ui/ui/Text'
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
  ${centerContentCSS};
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
