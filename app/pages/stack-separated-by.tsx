import { DemoPage } from 'components/DemoPage'
import { Text } from '@reactkit/ui/ui/Text'
import { SeparatedByLine } from '@reactkit/ui/layout/SeparatedByLine'
import {
  HStackSeparatedBy,
  dotSeparator,
  slashSeparator,
} from '@reactkit/ui/layout/StackSeparatedBy'
import { LabeledValue } from '@reactkit/ui/ui/LabeledValue'
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
