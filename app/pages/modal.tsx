import { ExternalLink } from '@reactkit/ui/navigation/Link/ExternalLink'
import { Modal } from '@reactkit/ui/modal'
import { Opener } from '@reactkit/ui/base/Opener'
import { HStack, VStack } from '@reactkit/ui/layout/Stack'
import { Text } from '@reactkit/ui/ui/Text'
import { DemoPage } from 'components/DemoPage'
import { Button } from '@reactkit/ui/buttons/Button'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="v61B8aToxR0" title="Modal / Popup">
      <HStack fullWidth gap={40}>
        <Opener
          renderOpener={({ onOpen }) => (
            <Button onClick={onOpen}>Open Modal</Button>
          )}
          renderContent={({ onClose }) => (
            <Modal
              title="Get More Freedom"
              onClose={onClose}
              width={400}
              footer={
                <ExternalLink to="https://increaser.org">
                  <Button size="l" as="div">
                    Start now
                  </Button>
                </ExternalLink>
              }
            >
              <VStack gap={20}>
                <Text>
                  👨‍💻 No distractions, only deep work and quality breaks.
                </Text>
                <Text>💪 Build good habits. Break bad ones.</Text>
                <Text>😌 Efficiency over long hours. More time for life!</Text>
                <Text>☀️ Start work early. Enjoy the evening!</Text>
              </VStack>
            </Modal>
          )}
        />
      </HStack>
    </DemoPage>
  )
})
