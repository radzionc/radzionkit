import { VStack } from '@reactkit/ui/layout/Stack'
import { DemoPage } from 'components/DemoPage'
import { ExpandablePanel } from '@reactkit/ui/ui/Panel/ExpandablePanel'
import { Text } from '@reactkit/ui/ui/Text'
import { ExternalLink } from '@reactkit/ui/navigation/Link/ExternalLink'
import { Button } from '@reactkit/ui/buttons/Button'
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
