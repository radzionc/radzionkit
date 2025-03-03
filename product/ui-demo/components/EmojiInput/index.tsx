import { centerContent } from '@lib/ui/css/centerContent'
import { HStack } from '@lib/ui/css/stack'
import { ExpandableInputOpener } from '@lib/ui/inputs/ExpandableInputOpener'
import { Spinner } from '@lib/ui/loaders/Spinner'
import { Menu } from '@lib/ui/menu'
import { InputProps } from '@lib/ui/props'
import { Text } from '@lib/ui/text'
import dynamic from 'next/dynamic'
import styled from 'styled-components'

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
      renderOpener={({ props, isOpen }) => (
        <ExpandableInputOpener isActive={isOpen} type="button" {...props}>
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
