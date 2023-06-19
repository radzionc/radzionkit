import { Spinner } from 'lib/ui/Spinner'
import { HStack } from 'lib/ui/Stack'
import { centerContentCSS } from 'lib/ui/utils/centerContentCSS'
import { Suspense, lazy } from 'react'
import styled from 'styled-components'
import { ExpandableInputOpener } from '../ExpandableInputOpener'
import { Menu } from 'lib/ui/Menu'
import { Text } from 'lib/ui/Text'

const EmojiPicker = lazy(() => import('./EmojiPicker'))

interface Props {
  value: string
  onChange: (value: string) => void
}

const EmojiMartFallback = styled.div`
  width: 352px;
  height: 435px;
  ${centerContentCSS};
`

export const EmojiInput = ({ value, onChange }: Props) => {
  return (
    <Menu
      title="Select emoji"
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
