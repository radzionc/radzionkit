import { DemoPage } from '@demo/app/components/DemoPage'
import { Text } from '@lib/ui/text'
import { SeparatedByLine } from '@lib/ui/layout/SeparatedByLine'
import {
  HStackSeparatedBy,
  dotSeparator,
  slashSeparator,
} from '@lib/ui/layout/StackSeparatedBy'
import { LabeledValue } from '@lib/ui/text/LabeledValue'
import { makeDemoPage } from '@demo/app/layout/makeDemoPage'

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
