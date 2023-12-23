import { DemoPage } from 'components/DemoPage'
import { Text } from '@radzionkit/ui/text'
import { SeparatedByLine } from '@radzionkit/ui/layout/SeparatedByLine'
import {
  HStackSeparatedBy,
  dotSeparator,
  slashSeparator,
} from '@radzionkit/ui/layout/StackSeparatedBy'
import { LabeledValue } from '@radzionkit/ui/text/LabeledValue'
import { makeDemoPage } from 'layout/makeDemoPage'

export default makeDemoPage(() => {
  return (
    <DemoPage youtubeVideoId="r75UDbxnFDc" title="Stack Separated By">
      <SeparatedByLine gap={16}>
        <LabeledValue name="Total">
          <HStackSeparatedBy
            separator={<Text color="supporting">{slashSeparator}</Text>}
          >
            <Text>1h 20min</Text>
            <Text>4h</Text>
          </HStackSeparatedBy>
        </LabeledValue>
        <LabeledValue name="Total">
          <HStackSeparatedBy
            separator={<Text color="supporting">{dotSeparator}</Text>}
          >
            <Text>1h 20min</Text>
            <Text>4h</Text>
          </HStackSeparatedBy>
        </LabeledValue>
      </SeparatedByLine>
    </DemoPage>
  )
})
