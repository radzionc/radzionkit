import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { Text } from 'lib/ui/Text'
import { SeparatedByLine } from 'lib/ui/SeparatedByLine'
import { HStackSeparatedBy, StackSeparatedBy, dotSeparator, slashSeparator } from 'lib/ui/StackSeparatedBy'
import { LabeledValue } from 'lib/ui/LabeledValue'

const StackSeparatedByPage: NextPage = () => {
  return (
    <DemoPage title="Stack Separated By">
      <SeparatedByLine gap={16}>
        <LabeledValue name="Total">
          <HStackSeparatedBy separator={<Text color="supporting">{slashSeparator}</Text>}>
            <Text>1h 20min</Text>
            <Text>4h</Text>
          </HStackSeparatedBy>
        </LabeledValue>
        <LabeledValue name="Total">
          <HStackSeparatedBy separator={<Text color="supporting">{dotSeparator}</Text>}>
            <Text>1h 20min</Text>
            <Text>4h</Text>
          </HStackSeparatedBy>
        </LabeledValue>
      </SeparatedByLine>
    </DemoPage>
  )
}

export default StackSeparatedByPage
