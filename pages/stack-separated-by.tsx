import type { NextPage } from 'next'
import { DemoPage } from 'components/DemoPage'
import { Text } from 'lib/ui/Text'
import { SeparatedByLine } from 'lib/ui/SeparatedByLine'
import { StackSeparatedBy, dotSeparator, slashSeparator } from 'lib/ui/StackSeparatedBy'
import { LabeledValue } from 'lib/ui/LabeledValue'

const SeparatedByLinePage: NextPage = () => {
  return (
    <DemoPage title="Stack Separated By">
      <SeparatedByLine gap={16}>
        <LabeledValue name="Total">
          <StackSeparatedBy gap={8} separator={<Text color="supporting">{slashSeparator}</Text>} direction="row">
            <Text>1h 20min</Text>
            <Text>4h</Text>
          </StackSeparatedBy>
        </LabeledValue>
        <LabeledValue name="Total">
          <StackSeparatedBy gap={8} separator={<Text color="supporting">{dotSeparator}</Text>} direction="row">
            <Text>1h 20min</Text>
            <Text>4h</Text>
          </StackSeparatedBy>
        </LabeledValue>
      </SeparatedByLine>
    </DemoPage>
  )
}

export default SeparatedByLinePage
