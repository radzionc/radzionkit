import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { Text } from '@reactkit/ui/ui/Text'
import { SeparatedByLine } from '@reactkit/ui/ui/SeparatedByLine'

const SeparatedByLinePage: NextPage = () => {
  return (
    <DemoPage title="Separated By Line" youtubeVideoId="r75UDbxnFDc">
      <SeparatedByLine gap={16}>
        <Text>First section</Text>
        <Text>Second section</Text>
      </SeparatedByLine>
    </DemoPage>
  )
}

export default SeparatedByLinePage
