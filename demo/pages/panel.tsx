import { VStack } from '@radzionkit/ui/layout/Stack'
import { DemoPage } from 'components/DemoPage'
import { ExpandablePanel } from '@radzionkit/ui/panel/ExpandablePanel'
import { Text } from '@radzionkit/ui/text'
import { ExternalLink } from '@radzionkit/ui/navigation/Link/ExternalLink'
import { Button } from '@radzionkit/ui/buttons/Button'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="cY-wADVIrRQ" title="Panel">
      <ExpandablePanel
        width={400}
        header={
          <VStack alignItems="start" gap={4}>
            <Text size={18} weight="bold">
              Increaser
            </Text>
            <Text>Stop overworking</Text>
          </VStack>
        }
        renderContent={() => (
          <VStack gap={20}>
            <Text>👨‍💻 No distractions, only deep work and quality breaks.</Text>
            <Text>💪 Build good habits. Break bad ones.</Text>
            <Text>😌 Efficiency over long hours. More time for life!</Text>
            <Text>☀️ Start work early. Enjoy the evening!</Text>
            <ExternalLink to="https://increaser.org">
              <Button>Start now</Button>
            </ExternalLink>
          </VStack>
        )}
      />
    </DemoPage>
  )
})
