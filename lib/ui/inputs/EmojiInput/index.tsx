import { Spinner } from 'lib/ui/Spinner'
import { HStack } from 'lib/ui/Stack'
import { centerContentCSS } from 'lib/ui/utils/centerContentCSS'
import { Suspense, lazy } from 'react'
import styled from 'styled-components'
import { ExpandableInputOpener } from '../ExpandableInputOpener'
import { Menu } from 'lib/ui/Menu'
import { Text } from 'lib/ui/Text'
import { InputProps } from 'lib/shared/props'

const EmojiPicker = lazy(() => import('./EmojiPicker'))

interface EmojiInputProps extends InputProps<string> { }

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
        <Suspense
          fallback={
            <EmojiMartFallback>
              <HStack gap={4} alignItems="center">
                <Spinner />
                <Text>Loading emoji picker</Text>
              </HStack>
            </EmojiMartFallback>
          }
        >
          <EmojiPicker
            onSelect={(value) => {
              onChange(value)
              onClose()
            }}
          />
        </Suspense>
      )}
    />
  )
}
