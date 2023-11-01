import { DemoPage } from 'components/DemoPage'
import { Text } from '@reactkit/ui/ui/Text'
import { SeparatedByLine } from '@reactkit/ui/layout/SeparatedByLine'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage title="Separated By Line" youtubeVideoId="r75UDbxnFDc">
      <SeparatedByLine gap={16}>
        <Text>First section</Text>
        <Text>Second section</Text>
      </SeparatedByLine>
    </DemoPage>
  )
})
