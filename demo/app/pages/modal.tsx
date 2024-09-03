import { ExternalLink } from '@lib/ui/navigation/Link/ExternalLink'
import { Modal } from '@lib/ui/modal'
import { Opener } from '@lib/ui/base/Opener'
import { HStack, VStack } from '@lib/ui/css/stack'
import { Text } from '@lib/ui/text'
import { DemoPage } from '@demo/app/components/DemoPage'
import { Button } from '@lib/ui/buttons/Button'
import { makeDemoPage } from '@demo/app/layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="Sp-KmZfUWn8" title="Modal / Popup">
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
