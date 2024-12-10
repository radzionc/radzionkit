import { VStack } from '@lib/ui/css/stack'
import { DemoPage } from '@product/ui-demo/components/DemoPage'
import { ExpandablePanel } from '@lib/ui/panel/ExpandablePanel'
import { Text } from '@lib/ui/text'
import { ExternalLink } from '@lib/ui/navigation/Link/ExternalLink'
import { Button } from '@lib/ui/buttons/Button'
import { makeDemoPage } from '@product/ui-demo/layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="cY-wADVIrRQ" title="Panel">
      <ExpandablePanel
        style={{ width: 400 }}
        header={
          <VStack alignItems="start" gap={4}>
            <Text size={18} weight="600">
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
