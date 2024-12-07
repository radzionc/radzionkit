import { DemoPage } from '@product/app/components/DemoPage'
import { Text } from '@lib/ui/text'
import { SeparatedByLine } from '@lib/ui/layout/SeparatedByLine'
import { makeDemoPage } from '@product/app/layout/makeDemoPage'

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
